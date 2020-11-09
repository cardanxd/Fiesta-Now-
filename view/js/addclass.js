document.getElementById("add-student").addEventListener("click", function() {
    let rows = document.getElementsByName("row").length + 1;
    let rowid = "row-" + rows;

    document.getElementById("class").innerHTML +=
        "<tr id =" + rowid + " name='row'>\
        <th scope='row'>\
            <button type='button' onclick=RemoveClass('" + rowid + "') id='add-student' name='rmv-class' class='btn btn-success btn-sm'> \
            <span class='glyphicon glyphicon-erase'></span> \
            </button> \
        </th> \
        <td><select name='days' id='day'>\
            <option>Lunes</option>\
            <option>Martes</option>\
            <option>Miercoles</option>\
            <option>Jueves</option>\
            <option>Viernes</option>\
            <option>Sabado</option>\
            <option>Domingo</option>\
        </select></td>\
        <td><input name='Inicio' type='time' value='22:53'></td>\
        <td><input name='Cierre' type='time' value='22:53'></td>\
    </tr>\
    ";
})

function RemoveClass(del) {
    let row = document.getElementById(del);
    let padre = row.parentNode;
    padre.removeChild(row);
}




document.getElementById("guardar").addEventListener("click", function() {
    let obj = {
        "alumnosMax": document.getElementById("alumnos").value,
        "codigoBaileID": document.getElementById("Tipo").value,
        "horarios": GenerateHorario()
    }

    fetch("https://localhost:5001/api/clase", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .catch(error => console.log("error"))
        .then(json => {
            //location.href = "./Login.html"
        });

})


function GenerateHorario() {
    let newshorarios = new Array();
    console.log("inicio");
    let horariosInicio = document.getElementsByName("Inicio");
    let horariosCierre = document.getElementsByName("Cierre");
    let row = 0;

    horariosInicio.forEach(horario => (
        newshorarios.push({
            Apertura: "2019-07-26T" + horario.value,
            Cierre: "2019-07-26T" + horariosCierre[row].value,
            Dia: "Miercoles"
        })
    ));

    newshorarios.forEach(x => console.log(x));
    return newshorarios;
}