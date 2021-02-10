const express = require('express');
const router = express.Router();

const Clases = require('./../../lib/Student/ClassRepository');

function GenerateHorario(clase) {
    let newshorarios = new Array();


    if (Array.isArray(clase.Inicio)) {
        let horariosInicio = clase.Inicio;
        let horariosCierre = clase.Cierre;
        let Dias = clase.days;
        let row = 0;

        horariosInicio.forEach(horario => (
            newshorarios.push({
                Apertura: "2019-07-26T" + horario,
                Cierre: "2019-07-26T" + horariosCierre[row],
                Dia: Dias[row++]
            })
        ));
    } else
        newshorarios.push({
            Apertura: "2019-07-26T" + clase.Inicio,
            Cierre: "2019-07-26T" + clase.Cierre,
            Dia: clase.days
        })

    newshorarios.forEach(x => console.log(x));
    return newshorarios;
}

router.get('/Clases/:id', async(req, res) => {
    const { id } = req.params;
    const panel = await Clases.GetClassByAcademy(id);
    const horarios = await Clases.GetHorario(panel);
    res.render('links/ClassByID', { horarios: horarios });
})

router.get('/ClasesAll', async(req, res) => {
    const clases = await Clases.GetClassAll();
    const horarios = await Clases.GetHorario(clases);
    res.render('links/ClasesAll', { horarios: horarios });
})

router.get('/ClassInfo/:id', async(req, res) => {
    const { id } = req.params;
    const clase = await Clases.GetClassById(id);
    res.render('links/ClassInfo', { clase: clase });
})

module.exports = router;