document.getElementById("add-horario").addEventListener("click", function () {
    let rows = (document.getElementsByName("row").length * -1) - 1;
    let rowid = "row-" + rows;

    //table structure
    let table = document.getElementById("class");
    let column = document.createElement("tr")
    column.id=  rowid;
    column.setAttribute("name","row");
    column.id = rowid;

    //button first field
    let th = document.createElement("th");
    let btnRemove = document.createElement("button");
    let iconButton = document.createElement("i");
    iconButton.className = "fa fa-close";

    //selection and input 
    let td = document.createElement("td");
    let fieldSelection = document.createElement("select");
    let fieldInput = document.createElement("input");

    //create button
    btnRemove.type = 'button';
    btnRemove.setAttribute("onclick","RemoveClass('" + rowid + "')");
    btnRemove.className = "btn btn-success btn-sm";
    btnRemove.name = 'rmv-class'
    btnRemove.appendChild(iconButton);
    th.appendChild(btnRemove);
    column.appendChild(th);

    //create selection
    td = document.createElement("td");
    fieldSelection.setAttribute("name","days");
    fieldSelection.id = 'day';
    Options = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    Options.forEach(x => {
        Option = document.createElement("option")
        Option.text = x;
        fieldSelection.appendChild(Option);
    })

    td.appendChild(fieldSelection);
    column.appendChild(td)

    //create inputs
    td = document.createElement("td");
    fieldInput.type = "time";
    fieldInput.value = '12:00';
    fieldInput.name = "Inicio"

    td.appendChild(fieldInput);
    column.appendChild(td)

    fieldInput = document.createElement("input");
    fieldInput.type = "time";
    fieldInput.value = '12:00';
    fieldInput.name = "Cierre";
    td = document.createElement("td");
    td.appendChild(fieldInput);
    column.appendChild(td)

    //add field complete to table
    table.appendChild(column);
})


function Restaurar(del) {

    let day = document.getElementById(del).getElementsByTagName("select")[0].value;

    document.getElementById("day" + "-" + del).setAttribute("name", "Updatedays");
    document.getElementById("Inicio" + "-" + del).setAttribute("name", "UpdateInicio");
    document.getElementById("Cierre" + "-" + del).setAttribute("name", "UpdateCierre");
    document.getElementById("id" + "-" + del).setAttribute("name", "Updateid");

    let row = document.getElementById(del);
    let padre = row.parentNode;

    var destination = document.getElementById('class');
    var copy = row.cloneNode(true);
    padre.removeChild(row);
    copy.getElementsByTagName("button")[0].setAttribute("onclick", "RemoveClass('" + del + "')");
    copy.getElementsByTagName("i")[0].className = "fa fa-ban";
    copy.getElementsByTagName("select")[0].value = day;

    destination.appendChild(copy);
}


function RemoveClass(del) {
    let row = document.getElementById(del);
    let day = document.getElementById(del).getElementsByTagName("select")[0].value;
    let padre = row.parentNode;

    if (del.indexOf("--") == -1) {

        //cambiar los nombre 
        document.getElementById("day" + "-" + del).setAttribute("name", "DeleteDay");
        document.getElementById("Inicio" + "-" + del).setAttribute("name", "DeleteInicio");
        document.getElementById("Cierre" + "-" + del).setAttribute("name", "DeleteCierre");
        document.getElementById("id" + "-" + del).setAttribute("name", "Deleteid");

        //replicar la fila
        let copy = row.cloneNode(true);
        let destination = document.getElementById('trash');
        let button = copy.getElementsByTagName("button")[0];
        copy.getElementsByTagName("i")[0].className = "fa fa-reply";
        console.log(day);
        copy.getElementsByTagName("select")[0].value = day;

        destination.appendChild(copy)
        button.setAttribute("onclick", "Restaurar('" + del + "')")
    }


    padre.removeChild(row);
}


function setDay(id, day) {
    let select = document.getElementById(id);
    select.value = day;
    alert("Image is loaded");
}