const Academy = {}
const fetch = require("node-fetch")

Academy.Get = async() => {
    let url = global.apiConnection + "/api/academia";
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let item = await response.json();
    return item.data;
}

Academy.Add = async function(Academy) {
    const fetch = require("node-fetch")
    let obj = {
        Nombre: Academy.academy,
        Numero: Academy.number,
        Correo: Academy.correo,
        Password: Academy.password,
        Descripcion: Academy.descripcion,
        Direction: Academy.direccion,
        Longitud: parseFloat(Academy.lat),
        Latitud: parseFloat(Academy.lng),
        Logo: Academy.logo,
        Rol: 1
    }
    console.log(obj);
    let response = await fetch(global.apiConnection + "/api/academia", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let item = await response.json();
    console.log(item);

    return item.data;


}

Academy.Delete = async function(id) {
    const fetch = require("node-fetch")
    try {

        let UrlDelete = global.apiConnection + "/api/academia/" + id;
        // console.log(UrlDelete);
        let response = await fetch(UrlDelete, {

            method: "DELETE"
        })

        return response.status < 500;
    } catch (e) {
        // console.log("Error", "color:red");
        return 0;
    }
    return 0;
}

Academy.GetById = async function(Id) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/academia/" + Id)
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

Academy.Update = async function(Id, academy) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let obj = {
        nombre: academy.nombre,
        numero: academy.numero,
        descripcion: academy.descripcion,
        direction: academy.direction,
        longitud: parseFloat(1992321512.42563),
        latitud: parseFloat(198728745872.123857129),
        logo: academy.logo
    }

    try {

        let UrlPut = global.apiConnection + "/api/Academia/" + Id;
        // console.log(UrlPut, JSON.stringify(obj));

        let response = await fetch(UrlPut, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            // console.log(response);

        return true;
    } catch (e) {
        // console.log("Error", "color:red");
        return false;
    }

    return false;

}

module.exports = Academy;