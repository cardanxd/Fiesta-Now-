document.getElementById("Register").addEventListener("click", function() {

    let obj = {
        correo: document.getElementById("Correo").value,
        password: document.getElementById("Password").value
    }

    fetch("https://localhost:5001/api/cuenta", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });

})