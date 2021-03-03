const Student = {}

Student.Add = async function(Student) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let obj = {
        Nombre: Student.nombre,
        Apellido: Student.apellidos,
        Correo: Student.correo,
        Password: Student.password,
        Rol: 1
    }

    console.log(obj);
    let response = await fetch(global.apiConnection + "/api/estudiante", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let item = await response.json();

    return item.data;
}

Student.GetById = async function(Id) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/estudiante/" + Id)
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

Student.Delete = async function(id) {
    const fetch = require("node-fetch")
    try {

        let UrlDelete = global.apiConnection + "/api/estudiante" + id;
        console.log(UrlDelete);
        let response = await fetch(UrlDelete, {
            method: "DELETE"
        })

        return response.status < 500;
    } catch (e) {
        console.log("Error", "color:red");
        return 0;
    }
    return 0;
}

Student.Update = async function(Id, student) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let obj = {
        Nombre: student.nombre,
        Apellido: student.apellido
    }

    try {

        let UrlPut = global.apiConnection + "/api/estudiante/" + Id;
        console.log(UrlPut, JSON.stringify(obj));

        let response = await fetch(UrlPut, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        console.log(response);

        return true;
    } catch (e) {
        console.log("Error", "color:red");
        return false;
    }

    return false;

}

module.exports = Student;