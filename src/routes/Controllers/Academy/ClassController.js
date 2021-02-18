const express = require('express'); 
const router = express.Router();

const fetch = require("node-fetch")
const PanelAcademi = require('../../../lib/PanelAcademy');
const Classes = require('../../../lib/Repositories/Academy/ClassRepository');
const Horaio = require('../../../lib/Repositories/Academy/HorarioRepository');

router.get('/UpdateClass/:id', async (req, res) => {
    let Class = new Array();
    Class.push(await Classes.GetById(req.params.id)); //
    const Class_Horarios = await PanelAcademi.GetHorario(Class, false);
    //// console.log(Class_Horarios[0]);
    res.render('links/UpdateClass', { class: Class_Horarios[0], id: req.params.id });
})


router.post('/UpdateClass/:id', async (req, res) => {
    const { id } = req.params;
    const { aula, alumnos, Tipos, Updatedays, UpdateInicio, UpdateCierre, Updateid, days, Inicio, Cierre, Deleteid } = req.body;

    const Clase = {
        id: parseInt(id),
        Nombre: aula,
        AlumnosMax: parseInt(alumnos),
        CodigoBaileID: parseInt(Tipos),
        AcademiaId: parseInt(req.session.userId),
        NewHorarios: {
            days: days,
            Inicio,
            Cierre
        },
        UpdateHorarios: { //horarios que se vean a actualizar
            Id: Updateid,
            days: Updatedays,
            Inicio: UpdateInicio,
            Cierre: UpdateCierre
        },
        Delete: Deleteid //id de los horarios que se eliminaran
    }
    let update = await Classes.Update(Clase);

    if (update == "")
        res.redirect("/links/PanelAcademia");
    else {
        req.flash('error', update);
        res.redirect("/links/UpdateClass/" + id);
    }
})

//TODO:Crear un controlador o ligarlo a una clase
async function RegisterClass(clase) {

    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    clase.horarios = Horaio.ToFormat(clase.horarios);

    //// console.log(clase)
    await fetch(global.apiConnection + "/api/clase", {
         
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clase)
    })
        .then(response => response.json())
        .catch(error => console.log("error", error))
        .then(json => {
            // console.log(json);
        });
}

router.get('/add', (req, res) => {
    res.render('links/addClass');
})


router.post('/add', async (req, res) => {

    //TODO:agregar un destructuring 
    let obj = {
        "Nombre": req.body.aula,
        "alumnosMax": parseInt(req.body.alumnos),
        "codigoBaileID": parseInt(req.body.Tipos),
        "academiaId": parseInt(req.session.userId),
        "horarios": req.body
    }

    await RegisterClass(obj);
    req.flash('success', 'Clase guardada exitosamente');
    res.redirect("/links/PanelAcademia");
})


module.exports = router;
