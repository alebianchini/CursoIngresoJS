function mostrar()
{
    var numero = parseInt(prompt("Ingrese su número"));
    var contadorDivisores = 0;

    while( isNaN(numero) || numero < 1) {
        numero = parseInt(prompt("Error. Ingrese un número válido"));
    }

    for( i = 1; i <= numero; i++) {

        if( numero % i == 0) {
            document.write(i + "</br>");
            contadorDivisores++;
        }
        
    }

    document.write("La cantidad de números divisores es: " + contadorDivisores);



}//FIN DE LA FUNCIÓN