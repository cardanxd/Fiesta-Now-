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
    let response = await fetch("https://localhost:5001/api/estudiante", {
        agent,
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

    try {

        let UrlGet = "https://localhost:5001/api/estudiante" + Id;
        console.log(UrlGet);
        let response = await fetch(UrlGet, {
            agent,
            method: "GET"
        })
        let item = await response.json();

        return item.data;
    } catch (e) {
        console.log("Error", "color:red");
    }

    return;
}

Student.Delete = async function(id) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    try {

        let UrlDelete = "https://localhost:5001/api/estudiante" + id;
        console.log(UrlDelete);
        let response = await fetch(UrlDelete, {
            agent,
            method: "DELETE"
        })

        return response.status < 500;
    } catch (e) {
        console.log("Error", "color:red");
        return 0;
    }
    return 0;
}

Student.Update = async function(Id, Student) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let obj = {
        Nombre: student.nombre,
        Apellido: student.apellidos,
        Correo: student.correo,
        Password: student.password
    }

    try {

        let UrlPut = "https://localhost:5001/api/estudiante" + Id;
        console.log(UrlPut, JSON.stringify(obj));

        let response = await fetch(UrlPut, {
            agent,
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