document.getElementById("Register").addEventListener("click", function() {

    let obj = {
        Nombre: name.value,
        Apellido: lastname.value,
        Email: email.value,
        Password: password.value,
        Rol: 1
    }

    const urlStudent = 'https://localhost:5001/api/estudiante'

    fetch(urlStudent, {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(json => {
            location.href = "./Login.html"
    });

})