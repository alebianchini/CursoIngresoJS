function mostrar()
{
    var numero = parseInt(prompt("Ingrese su número"));
    var contadorPares = 0;

    while( isNaN(numero) || numero < 1) {
        numero = parseInt(prompt("Error. Ingrese un número válido"));
    }

    for( i = 1; i <= numero; i++) {

        if( i % 2 == 0) {
            document.write(i + "</br>");
            contadorPares++;
        }
        
    }

    document.write("La cantidad de números pares es: " + contadorPares);
    



}//FIN DE LA FUNCIÓN