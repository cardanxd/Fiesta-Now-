const express = require('express');
const router = express.Router();

const Student = require('./../lib/GestionStudent');
const Academias = require('./../lib/Academias');
const Clases = require('../lib/ClassByID');

router.get('/StudentSignup', (req, res) => {
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

router.get('/DeleteStudent', async(req, res) => {
    let student = await Student.GetById(req.session.StudentId);
    res.render('links/DeleteStudent', { student: student });
})

router.post('/DeleteStudent', async(req, res) => {
    if (await Student.Delete(req.session.StudentId)) {
        req.session.estudianteId = 0;
        res.redirect("/signin");
    } else {
        res.redirect("/error");
    }
})



router.get('/UpdateStudent', async(req, res) => {
    let student = await Student.GetById(req.session.StudentId);
    res.render('links/UpdateStudent', { student: student });
    console.log(req.session.StudentId)
})

router.post('/UpdateStudent', async(req, res) => {
    if (await Student.Update(req.session.StudentId, req.body))
        res.redirect("/links/UpdateStudent");
    else
        res.redirect("/error");
})

router.get('/Academias', async(req, res) => {
    const academias = await Academias.GetAcademias();
    console.log(academias);
    res.render('links/AcademiasAll', { academias });
})

router.get('/Clases/:id', async(req, res) => {
    const { id } = req.params;
    const clases = await Clases.GetClass(id);
    res.render('links/ClassByID', { clases });
    console.log(id)
    console.log(clases)
})

module.exports = router;