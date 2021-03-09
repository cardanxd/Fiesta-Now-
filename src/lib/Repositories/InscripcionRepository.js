const Inscripcion = {};

Inscripcion.Add = async function(Inscripcion) {
    const fetch = require("node-fetch");
    console.log(Inscripcion);

    let response = await fetch(global.apiConnection + "/api/suscripsion", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Inscripcion)
    })
    let item = await response.json();

    return item.data;
}

Inscripcion.GetAllClassSusucriptions = async function(Id) {
    const fetch = require("node-fetch")
    try {
        let UrlGet = global.apiConnection + "/api/suscripsion/Academia/" + Id;
        // console.log(UrlGet);
        let response = await fetch(UrlGet, {
            method: "GET"
        })
        let item = await response.json();
        let data = {
            data: item
        }
        return await data;
    } catch (e) {
        // console.log("Error", "color:red");
    }

    return;
}




module.exports = Inscripcion;