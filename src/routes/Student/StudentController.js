const express = require('express');
const router = express.Router();

const Student = require('./../../lib/Student/StudentRepository');

router.get('/StudentSignup', (req, res) => {
    res.render('links/StudentSignup');
})

router.post('/StudentSignup', async(req, res) => {
    let student = await Student.Add(req.body);
    console.log(req.body);
    console.log(student);
    req.session.id = student.id;

    res.redirect("/links/PanelEstudiante");
})

router.get('/PanelEstudiante', (req, res) => {
    res.render('links/EstudiantePanel');
})

router.get('/DeleteStudent', async(req, res) => {
    let student = await Student.GetById(req.session.id);
    res.render('links/DeleteStudent', { student: student });
})

router.post('/DeleteStudent', async(req, res) => {
    if (await Student.Delete(req.session.id)) {
        req.session.id = 0;
        res.redirect("/signin");
    } else {
        res.redirect("/error");
    }
})

router.get('/UpdateStudent', async(req, res) => {
    let student = await Student.GetById(req.session.id);
    console.log(req.session.id);
    console.log(student);
    res.render('links/UpdateStudent', { student: student });
})

router.post('/UpdateStudent', async(req, res) => {
    if (await Student.Update(req.session.id, req.body))
        res.redirect("/links/UpdateStudent");
    else
        res.redirect("/error");
})

module.exports = router;