function mostrar()
{
    var numero;
    var letra;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var contadorPositivos = 0;
    var promedio;
    var numMaximo;
    var letraMaxima;
    var numMinimo;
    var letraMinima;
    var seguir;
    var flag = 0;


    do{
        letra = prompt("Ingrese una letra.");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));

        while(numero < -100 || numero > 100){
            numero = parseInt(prompt("Número no válido. Ingrese un numero entre -100 y 100."));
        }

        if(numero == 0){
            contadorCeros++;
            contadorPares++;
        }
        else if(numero % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }

        if(numero > 0){
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;
        }
        else if(numero < 0){
            acumuladorNegativos = acumuladorNegativos + numero;
        }

        if(numero > numMaximo || flag == 0){
            numMaximo = numero;
            letraMaxima = letra;
        }
        if(numero < numMinimo || flag == 0){
            numMinimo = numero;
            letraMinima = letra;
            flag = 1;
        }        
              

        seguir = prompt("Quiere seguir ingresando datos?");
        
    }while(seguir == 's');

    promedio = acumuladorPositivos / contadorPositivos;

    document.write("Cantidad de números pares: " + contadorPares + "</br>");
    document.write("Cantidad de números impares: " + contadorImpares + "</br>");
    document.write("Cantidad de ceros: " + contadorCeros + "</br>");
    document.write("Promedio de los números positivos: " + promedio + "</br>");
    document.write("Suma de los números negativos: " + acumuladorNegativos + "</br>");
    document.write("Letra y número máximo: " + letraMaxima + " , " + numMaximo + "</br>");
    document.write("Letra y número mínimo: " + letraMinima + " , " + numMinimo + "</br>");

}
