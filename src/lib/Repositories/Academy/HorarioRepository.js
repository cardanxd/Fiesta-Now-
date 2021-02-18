const Horario = {};
const fetch = require("node-fetch")
const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
});


Horario.ToFormat = function (clase) {
    

    let newshorarios = new Array();
    if (clase.Inicio == undefined) return [];
    
    //TODO: Parchar clase.inicio para que siempre sea un array;
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
    } else{
        let id = clase.Id;
        newshorarios.push({
            id: id == undefined ? 0 : parseInt(id),
            Apertura: "2019-07-26T" + clase.Inicio,
            Cierre: "2019-07-26T" + clase.Cierre,
            Dia: clase.days
        })
    }
        
    return newshorarios;
}



Horario.Update = async function (Horario) {
    
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    const horarios = await ToFormat(Horario);

    let TotalHorarios = horarios.length;

    for (let index = 0; index < TotalHorarios; index++) {
        const { id, Apertura, Cierre, Dia } = horario[index];

        let obj = {
            Apertura,
            Cierre,
            Dia
        };
        // console.log(obj);

        let PutUrl = global.apiConnection + "/api/academia" + id;
        let response = await fetch(PutUrl, {
             
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
}

Horario.GetById = async function (id) {
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

Horario.Delete = async function (id) {

    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    
    try{
        let deleteUrl = global.apiConnection + "/api/horario/" + id;
        await fetch(deleteUrl,{
             
            method: "DELETE"
        })
    }
    catch(e){
        // console.log(e);
    }
    return true;
}

module.exports = Horario;