const Panel = {}
const Inscripcion = require('./Repositories/InscripcionRepository');

Panel.GetHorario = async function GetHorarios(result, format = true) {
    const fetch = require("node-fetch")
    var horarios = new Array();

    const format12Hours = (date) => {
        const formatApertura = new Date(date.apertura);
        const formatCierre = new Date(date.cierre);

        date.apertura = formatApertura.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        date.cierre = formatCierre.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        return date;
    }


    //obtine todos los horarios de las clases en result y las gurada en un array
    for (let i = 0; i < result.length; i++) {
        let response = await fetch(result[i].horarios);
        let data = await response.json();
        let inscriptions = await Inscripcion.GetAllClassSusucriptions(result[i].id);
        let inscriplen = inscriptions.data.length;

        horarios.push({
            clase: result[i],
            horarios: format ? data.data.map(format12Hours) : data.data,
            allInscripcions: inscriplen == undefined ? 0 : inscriplen
        })
    }
    console.log(horarios);
    return horarios;
}


Panel.GetClass = async function(id) {
    const fetch = require("node-fetch")

    let resutl = await fetch(global.apiConnection + "/api/clase/Academy/" + id)
    let response = await resutl.json()

    return response.data;
}

module.exports = Panel;