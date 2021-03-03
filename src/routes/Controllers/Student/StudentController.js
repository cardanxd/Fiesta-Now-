const express = require('express');
const router = express.Router();

const Student = require('./../../../lib/Repositories//Student/StudentRepository');

router.get('/StudentSignup', (req, res) => {
    res.render('links/StudentSignup');
})

router.post('/StudentSignup', async(req, res) => {
    let student = await Student.Add(req.body);
    console.log(req.body);
    console.log(student);
    req.session.userId = student.id;

    res.redirect("/links/PanelEstudiante");
})

router.get('/PanelEstudiante', (req, res) => {
    console.log(req.session.userId);
    res.render('links/EstudiantePanel');
})

router.get('/DeleteStudent', async(req, res) => {
    let student = await Student.GetById(req.session.userId);
    res.render('links/DeleteStudent', { student: student });
})

router.post('/DeleteStudent', async(req, res) => {
    if (await Student.Delete(req.session.userId)) {
        req.session.userId = 0;
        res.redirect("/signin");
    } else {
        res.redirect("/error");
    }
})

router.get('/UpdateStudent', async(req, res) => {
    console.log(req.session.userId);
    let student = await Student.GetById(req.session.userId);
    
    console.log(student);
    res.render('links/UpdateStudent', { student: student });
})

router.post('/UpdateStudent', async(req, res) => {
    if (await Student.Update(req.session.userId, req.body))
        res.redirect("/links/PanelEstudiante");
    else
        res.redirect("/error");
})

module.exports = router;