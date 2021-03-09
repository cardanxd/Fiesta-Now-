const express = require('express');
const router = express.Router();
const Inscripcion = require('./../../../lib/Repositories/InscripcionRepository');
const Class = require('./../../../lib/Repositories//Student/StudentRepository');


router.get('/inscripcion', (req, res) => {
    res.render('links/Inscripcion');
})


router.get('/Register/:Clase', (req, res) => {
    let now = new Date().toISOString();
    let endSuscription = new Date();
    endSuscription.setMonth(endSuscription.getMonth() + 1);

    let newInscripcion = {
        "Inicio": now,
        "Vencimiento": endSuscription.toISOString(),
        "ClaseId": parseInt(req.params.Clase),
        "CuentaId": parseInt(req.session.CuentaId)
    }

    Inscripcion.Add(newInscripcion)
    res.redirect("/links/PanelEstudiante");
})



router.get('/misclases', async(req, res) => {
    console.log(req.session.CuentaId)
    let clases = await Class.GetClases(req.session.CuentaId);
    let obj = clases.data;
    console.log(obj);
    res.render('links/MisClases', { clases: obj });
})

module.exports = router;