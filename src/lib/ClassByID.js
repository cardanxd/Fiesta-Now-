const ClassByID = {}

ClassByID.GetClass = async function(id) {
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

ClassByID.GetHorario = async function GetHorarios(result) {
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

module.exports = ClassByID;