const Clases = {}

Clases.GetClassAll = async function() {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/clase")
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

Clases.GetClassByAcademy = async function(id) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/clase/academy/" + id)
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

Clases.GetClassById = async function(id) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/clase/" + id)
        .then(response => response.json())
        .then(json => json)

    return result.data;
}


Clases.GetHorario = async function GetHorarios(result) {
    const fetch = require("node-fetch")
    const https = require("https");
    var horarios = new Array();

    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    for (let i = 0; i < result.length; i++) {
        let response = await fetch(result[i].horarios);
        let data = await response.json();
        horarios.push({
            clase: result[i],
            horarios: data.data
        })
    }

    return horarios;
}

Clases.GetAcademias = async function() {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch(global.apiConnection + "/api/academia")
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

module.exports = Clases;