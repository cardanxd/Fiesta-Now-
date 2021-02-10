const express = require('express');
const router = express.Router();

const Academias = require('./../../lib/Student/AcademiasRepository');

router.get('/Academias', async(req, res) => {
    const academias = await Academias.GetAcademias();
    console.log(academias);
    console.log(req.session.id);
    res.render('links/AcademiasAll', { academias });
})

module.exports = router;