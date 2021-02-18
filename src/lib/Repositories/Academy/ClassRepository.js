const Classes = {};
const Horarios = require("./HorarioRepository");


Classes.GetById = async function GetId(Id) {
    const fetch = require("node-fetch")
    try {
        let UrlGet = global.apiConnection + "/api/clase/" + Id;
        // console.log(UrlGet);
        let response = await fetch(UrlGet, {
             
            method: "GET"
        })
        let item = await response.json();

        return item.data;
    } catch (e) {
        // console.log("Error", "color:red");
    }

    return;
}

Classes.Update = async function (Clase) {
    const fetch = require("node-fetch")
    
    const Newhoarios = Horarios.ToFormat(Clase.NewHorarios);
    const UpdateHorarios = Horarios.ToFormat(Clase.UpdateHorarios);
    Clase.Horarios = Newhoarios.concat(UpdateHorarios);

    console.log(Clase);

    try {
        await fetch(global.apiConnection + "/api/clase/" + Clase.id, {
             
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Clase)
        })
            .then(response => response.json())
            .then(json => {
                // console.log("class", json)
                if (json.errors) {
                    const { status, detail } = json.errors[0];
                    if (status == 400)
                        throw detail;
                }
            });
        
        if (Array.isArray(Clase.Delete)) {
            for (let index = 0; index < Clase.Delete.length; index++) {
                const id = Clase.Delete[index];
                Horarios.Delete(id);
            }
        }else if(Clase.Delete){
            Horarios.Delete(Clase.Delete);
        }
    } catch (e) {
        // console.log(e);
        return e;
    }

    return "";
}


module.exports = Classes;