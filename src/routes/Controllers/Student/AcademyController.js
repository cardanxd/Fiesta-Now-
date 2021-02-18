const express = require('express');
const router = express.Router();

const Academias = require('./../../../lib/Repositories/Student/AcademiasRepository');

router.get('/Academias', async(req, res) => {
    const academias = await Academias.GetAcademias();
    console.log(academias);
    console.log(req.session.userId);
    res.render('links/AcademiasAll', { academias });
})

router.get('/AcademiaInfo/:id', async(req, res) => {
    const { id } = req.params;
    const academia = await Academias.GetById(id);
    res.render('links/AcademiaInfo', { academia: academia });
})

module.exports = router;