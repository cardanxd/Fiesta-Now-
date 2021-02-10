const express = require('express');
const router = express.Router();
const fetch = require("node-fetch")

async function ExistStudent(account) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let student;

    try {

        let url = global.apiConnection + "/api/cuenta/" + account.Correo + "/" + account.Password;
        const result = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await result.json();

        if (response.data.id > 0) {
            url = global.apiConnection + "/api/estudiante/Accout/" + response.data.id;
            console.log(url);
            var queryStudent = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            student = await queryStudent.json();
            student = student.data
        }
    } catch (e) {
        console.log(e);
    }

    return student;
}

router.get('/signin', (req, res) => {

    res.render("auth/signin", req.flash('navbar', true)[0])
})

router.post("/signin", async(req, res) => {
    let redirect = "/links/PanelEstudiante";
    const Student = await ExistStudent(req.body);
    console.log("Estudent id:", Student.id);

    if (Student)
        req.session.id = Student.id; 
    else {
        req.flash('failLogin', 'No se encontró ninguna cuenta con esos datos registrada, favor de verificar los datos');
        redirect = "/signin";
    }

    res.redirect(redirect);
})

router.get('/logout', (req, res) => {
    req.session.id = 0;
    res.redirect("/signin");

})

module.exports = router;