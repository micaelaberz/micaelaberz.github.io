src="../json_flores.js";

objFlores = JSON.parse(textoFlores);
var objetoflores = objFlores;

function cargarflores() {
    var familia = document.getElementById("familia")
    familia.innerHTML = ''; /*borra todo para asi volver a cargar de nuevo y q no se repita*/


    objetoflores.flores.forEach(function (atributo) {
        var opcion = document.createElement("option");
        opcion.textContent = atributo.codigo;
        opcion.value = atributo.codigo;
        familia.appendChild(opcion);
    })};


}

