function mostrar()
{
    var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

    while( isNaN(repeticiones)) {
        repeticiones = parseInt(prompt("Error. Ingrese el número de repeticiones"));
    }

    for( var i=0 ; i < repeticiones ; i++ ){
    document.write(i + ") " + "Hola UTN FRA </br>");
}



}//FIN DE LA FUNCIÓN
/* Yo lo hice de esta manera pero no esta bien.

for( var repeticiones = parseInt(prompt("ingrese el número de repeticiones")) ; repeticiones != 0 ; repeticiones-- ){
    document.write(repeticiones + ") " + "Hola UTN FRA" + "</br>");
*/