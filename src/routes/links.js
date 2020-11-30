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

    const academias = await Academias.GetAcademias();
    //const academias = await Academias.GetAll();
    console.log(academias);
    res.render('links/AcademiasAll', { academias: academias });
})

router.get('/UpdateStudent', async(req, res) => {
    let student = await Student.GetById(req.session.StudentId);
    console.log(student);
    res.render('links/UpdateStudent', { student: student });
})

router.post('/UpdateStudent', async(req, res) => {
    if (await Student.Update(req.session.StudentId, req.body))
        res.redirect("/links/UpdateStudent");
    else
        res.redirect("/error");
})

module.exports = router;