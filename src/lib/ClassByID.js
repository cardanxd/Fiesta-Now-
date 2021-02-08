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

module.exports = ClassByID;