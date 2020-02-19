function mostrar()
{

var sexo = prompt("ingrese f ó m .");

// while (  !(sexo == "f" || sexo == "m")  ) También se puede hacer de esta forma.
    while( sexo != "f" && sexo != "m") {
        sexo = prompt("Error. Ingrese f ó m .");
    }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN