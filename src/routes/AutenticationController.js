const express = require('express');
const router = express.Router();

const _academiaAccount = 1;



//TODO: Crear un accountRepository y distrubuir las tareas
async function ExistAcademy(account) {
    const fetch = require("node-fetch")

    let user;

    try {

        //cunsultar cuenta
        let url = global.apiConnection + "/api/cuenta/" + account.Correo + "/" + account.Password;
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await result.json();
        console.log(response);

        //consultar informacion vinculada a la cuenta
        if (response.data.id > 0) {
            url = response.data.rol == _academiaAccount ?
                global.apiConnection + "/api/academia/Accout/" + response.data.id :
                global.apiConnection + "/api/estudiante/accout/" + response.data.id;

            var queryUser = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            user = await queryUser.json();

            if (user.data == null)
                throw "No existen datos del usuario"

            user = {
                id: user.data.id,
                panel: response.data.rol == _academiaAccount ? "/links/PanelAcademia" : "/links/PanelEstudiante",
                CuentaId: response.data.id
            }

            console.log(user);
        }
    } catch (e) {
        console.log(e);
    }


    return user;
}

router.get('/signin', (req, res) => {

    res.render("auth/signin", req.flash('navbar', true)[0])

})

router.post("/signin", async(req, res) => {
    let redirect;
    const user = await ExistAcademy(req.body);


    if (user) {
        req.session.userId = user.id;
        req.session.CuentaId = user.CuentaId;
        redirect = user.panel;
    } else {
        req.flash('failLogin', 'No se encontro ninguna cuenta con esos datos registrada, favor de verificar los datos');
        redirect = "/signin";
    }

    res.redirect(redirect);
})

router.get('/logout', (req, res) => {
    req.session.userId = 0;
    res.redirect("/signin");

})

router.get('/links/type', (req, res) => {
    //// console.log(horarios)
    res.render('links/type');
})




module.exports = router;