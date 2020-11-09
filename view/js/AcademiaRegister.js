document.getElementById("Register").addEventListener("click", function() {

    let obj = {
        Nombre: academiname.value,
        Numero: number.value,
        Correo: correo.value,
        Password: "fake",
        Descripcion: "Esta es una Academia falsa",
        Direction: direccion.value,
        Longitud: 1992321512.42563,
        Latitud: 198728745872.123857129,
        Logo: photo.value,
        Rol: 1
    }

    fetch("https://localhost:5001/api/academia", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(json => {
            location.href = "./Login.html"
        });

})