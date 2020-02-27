function mostrar()
{
//SEGUN EL PROFESOR HAY QUE USAR DOS "FOR".
    var numero;
    var contador;

    numero = parseInt(prompt("Ingrese su número"));

    while( isNaN(numero)) {
        numero = parseInt(prompt("Error. Ingrese un número válido"));
    }

    for(var i = 0 ; i <= numero ; i++){

        if( numero % i == 0 && numero % numero == 0) {
            contador++;
        }
    }

    if(contador == 2){
        alert(numero + " es un número primo.");
    }
    else
    alert(numero + " no es un número primo.");
}//FIN DE LA FUNCIÓN