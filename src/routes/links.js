const express = require('express');
const router = express.Router();

const Student = require('./../lib/GestionStudent');
const Academias = require('./../lib/Academias');

router.get('/StudentSignup', (req, res) => {
    //console.log(horarios)
    res.render('links/StudentSignup');
})

router.post('/StudentSignup', async(req, res) => {
    let student = await Student.Add(req.body);
    console.log(req.body);
    console.log(student);
    req.session.StudentId = student.id;

    res.redirect("/links/PanelEstudiante");
})

router.get('/type', (req, res) => {
    res.render('links/type');
})

router.get('/PanelEstudiante', (req, res) => {
    res.render('links/EstudiantePanel');
})

router.get('/Academias', async(req, res) => {

    const panel = await Academias.GetAll();
    res.render('links/AcademiasAll');
})

router.get('/Academias', async(req, res) => {

    const panel = await Academias.GetAcademias();
    res.render('links/AcademiasAll');
})


module.exports = router;