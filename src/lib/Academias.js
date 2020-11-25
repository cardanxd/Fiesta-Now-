const Academias = {}

Academias.GetAcademias = async function() {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch("https://localhost:5001/api/academia", { agent })
        .then(response => response.json())
        .then(json => json)

    return result.data;
}

Academias.GetAll = async function() {
    const fetch = require("node-fetch")
    const https = require("https");
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    try {

        let UrlGet = "https://localhost:5001/api/academia/";
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

module.exports = Academias;