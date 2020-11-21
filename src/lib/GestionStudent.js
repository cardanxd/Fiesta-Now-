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

module.exports = Student;