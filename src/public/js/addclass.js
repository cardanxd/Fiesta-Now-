document.getElementById("add-horario").addEventListener("click", function() {
    let rows = (document.getElementsByName("row").length * -1) - 1;
    let rowid = "row-" + rows;

    document.getElementById("class").innerHTML +=
        "<tr id =" + rowid + " name='row'>\
        <th scope='row'>\
        <button type='button' onclick=RemoveClass('" + rowid + "')  name='rmv-class' class='btn btn-success btn-sm'> \
            <span class='glyphicon glyphicon-erase'>-</span> \
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


function Restaurar(del) {

    document.getElementById("day").setAttribute("UpdateDay");
    document.getElementById("Inicio").setAttribute("UpdateInicio");
    document.getElementById("Cierre").setAttribute("UpdateCierre");

    let row = document.getElementById(del);
    let padre = row.parentNode;
    var destination = document.getElementById('class');
    var copy = row.cloneNode(true);
    padre.removeChild(row);
    copy.setAttribute("onclick", "RemoveClass('" + del + "')")
    copy.setAttribute("name", "Update")
    destination.appendChild(copy)
}


function RemoveClass(del) {
    let row = document.getElementById(del);
    let padre = row.parentNode;

    if (del.indexOf("--") == -1) {

        document.getElementById("day").setAttribute("DeleteDay");
        document.getElementById("Inicio").setAttribute("DeleteInicio");
        document.getElementById("Cierre").setAttribute("DeleteCierre");


        var copy = row.cloneNode(true);
        var destination = document.getElementById('trash');
        destination.appendChild(copy)
        copy.setAttribute("onclick", "Restaurar('" + del + "')")
        copy.setAttribute("name", "Delete")
    }


    padre.removeChild(row);
}