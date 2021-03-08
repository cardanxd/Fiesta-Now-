const express = require('express');
const router = express.Router();

const Inscripcion = require('./../../../lib/Repositories//Student/StudentRepository');


router.get('/inscripcion', (req, res) => {
    res.render('links/Inscripcion');
})

router.get('/misclases', async(req, res) => {
    console.log(req.session.userId);
    console.log(req.session.CuentaId);
    var id = req.session.cuentaId;
    let clases = await Inscripcion.GetClases(id);
    let data = clases.data;
    res.render('links/MisClases', { data: data });
})

module.exports = router;