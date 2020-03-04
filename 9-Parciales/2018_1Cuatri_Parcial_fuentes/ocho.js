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
    var letraMinMenor = "-";
    var numMinMenor = "-";


    do{
        letra = prompt("Ingrese una letra.");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra.");
        } 

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));
        while(numero < -100 || numero > 100 || isNaN(numero)){
            numero = parseInt(prompt("Número no válido. Ingrese un numero entre -100 y 100."));
        }


        if(numero % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }

        if(numero == 0){
            contadorCeros++;
        }
        else if(numero > 0){
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;
        }
        else{
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
        if((letra >= 'a' && letra <= 'z') && (flag == 1 || numero < numMinMenor)){
            numMinMenor = numero;
            letraMinMenor = letra;
            flag = 2;
        }
                      

        seguir = prompt("Quiere seguir ingresando datos?");
        
    }while(seguir == 's');

    if(contadorPositivos =! 0){
    promedio = acumuladorPositivos / contadorPositivos;
    }
    
    document.write("Cantidad de números pares: " + contadorPares + "</br>");
    document.write("Cantidad de números impares: " + contadorImpares + "</br>");
    document.write("Cantidad de ceros: " + contadorCeros + "</br>");
    document.write("Promedio de los números positivos: " + promedio + "</br>");
    document.write("Suma de los números negativos: " + acumuladorNegativos + "</br>");
    document.write("Letra y número máximo: " + letraMaxima + " , " + numMaximo + "</br>");
    document.write("Letra y número mínimo: " + letraMinima + " , " + numMinimo + "</br>");
    document.write("Letra y número minúscula mínimo: " + letraMinMenor + " , " + numMinMenor);

}

    //validador de letras Alex.
/* var letras = "abcdefghijklmnñopkrstuvwxyz";

    letra = prompt("Ingrese una letra.");
        while (letras.indexOf(letra.toLowerCase()) == -1){
            letra = prompt("Eso no es una letra. Ingrese una letra.");

        //El punto G hecho por mi.
            if(letra >='a' && letra <= 'z'){
            if(numero < numMinMenor || flag == 1){
            numMinMenor = numero;
            letraMinMenor = letra;
            flag = 2;
            }
        }
*/