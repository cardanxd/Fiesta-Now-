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
    res.render('links/type');
})

router.get('/PanelEstudiante', (req, res) => {
    res.render('links/EstudiantePanel');
})

router.get('/Academias', (req, res) => {
    res.render('links/AcademiasAll');
})

module.exports = router;