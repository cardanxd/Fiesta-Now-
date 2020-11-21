const express = require('express');
const router = express.Router();

const fetch = require("node-fetch")
const PanelEstudiante = require('./../lib/PanelStudent');
const Academy = require('./../lib/GestionStudent');
const Student = require('./../lib/GestionStudent');

router.get('/StudentSignup', (req, res) => {
    //console.log(horarios)
    res.render('links/StudentSignup');
})

router.post('/StudentSignup', async(req, res) => {
    let student = await Student.Add(req.body);
    req.session.StudentId = student.id;

    res.redirect("/links/PanelEstudiante");
})

router.get('/type', (req, res) => {
    //console.log(horarios)
    res.render('links/type');
})

router.get('/PanelEstudiante', async(req, res) => {
    const panel = await PanelAcademi.GetClass(req.session.AcademyId); //
    const horarios = await PanelAcademi.GetHorario(panel);

    //console.log(horarios)
    res.render('links/EstudiantePanel', { horarios: horarios });
})

module.exports = router;