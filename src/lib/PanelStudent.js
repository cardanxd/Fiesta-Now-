const Panel = {}

/*Panel.GetAcademias = async function() {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    try{
        let result = "https://localhost:5001/api/academia/";
        console.log(result);
        let response = await fetch(result,{
            agent,
            method: "GET"
        })
        let item = await response.json();

        return item.data;
    } catch (e){
        console.log("Error", "color:red");
    }
    return;
}*/

/*Panel.GetAcademias = async function() {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let result = await fetch("https://localhost:5001/api/clase/", { agent })
        .then(response => response.json())
        .then(json => json)

    return result.data;
}*/

module.exports = Panel;