function mostrar()
{
// pido el dato
var clave = prompt("ingrese el número clave.");

// valido si el dato es invalido, si no lo es, entra al While.
    while( clave != "utn750") {
        alert("Clave incorrecta");
        clave = prompt("ingrese el número clave.");
    }

// en caso de ser correcto, le informa al usuario.l
    alert("Clave correcta");


}//FIN DE LA FUNCIÓN
