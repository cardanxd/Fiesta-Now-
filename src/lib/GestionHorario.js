const Horario = {};


//TODO: eliminar e implementar de l clase horarios
Horario.ToFormat = function(clase) {
    let newshorarios = new Array();


    if (Array.isArray(clase.Inicio)) {
        let horariosInicio = clase.Inicio;
        let horariosCierre = clase.Cierre;
        let Dias = clase.days;
        let id = clase.Id;
        let row = 0;

        horariosInicio.forEach(horario => (
            newshorarios.push({
                id: id == undefined ? 0 : parseInt(id[row]),
                Apertura: "2019-07-26T" + horario,
                Cierre: "2019-07-26T" + horariosCierre[row],
                Dia: Dias[row++]
            })
        ));
    } else
        newshorarios.push({
            Apertura: "2019-07-26T" + clase.Inicio,
            Cierre: "2019-07-26T" + clase.Cierre,
            Dia: clase.days
        })
    return newshorarios;
}

Horario.GetById = async function(id) {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let PutUrl = global.apiConnection + "/api/horario" + id;
    let response = await fetch(PutUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let item = await response.json();

    return item.data;
}

module.exports = Horario;