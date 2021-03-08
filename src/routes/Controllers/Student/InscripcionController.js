const express = require('express');
const router = express.Router();

const Inscripcion = require('./../../../lib/Repositories//Student/StudentRepository');


router.get('/inscripcion', (req, res) => {
    res.render('links/Inscripcion');
})

router.get('/misclases', async(req, res) => {
    console.log(req.session.CuentaId)
    let clases = await Inscripcion.GetClases(req.session.CuentaId);
    let obj = clases.data;
    console.log(obj);
    res.render('links/MisClases', { clases: obj });
})

module.exports = router;