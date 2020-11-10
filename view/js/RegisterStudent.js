document.getElementById("addStudent").addEventListener("click", function() {

    let estudiante = {
        Nombre: name.value,
        Apellido: lastname.value,
        Email: email.value,
        Password: password.value,

        CuentaID: 3
    }

    const urlStudent = 'https://localhost:5001/api/estudiante'

    fetch(urlStudent, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(estudiante)
    })
    .then(response => response.json())
    .then(json => {
            location.href = "./index.html"
    })
    .then(err => console.log(err));
})