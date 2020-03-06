function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var contadorTempPares = 0;
    var minimoHabitantes;
    var paisHabitantes;
    var contadorTempb = 0;
    var promedio;
    var acumuladorHabitantes = 0;
    var contador = 0;
    var minimaTemp;
    var paisTemp;
    var flag = 0;
    var flagb= 0;
    var seguir;


    do {
        pais = prompt("Ingrese un país:");
        habitantes = parseInt(prompt("Ingrese el número de habitantes en millones:"));
        while(habitantes <= 1 || habitantes >= 7000 || isNaN(habitantes)){
            habitantes = parseInt(prompt("Dato inválido. Ingrese el número de habitantes en millones:"));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura del país:"));
        while(temperatura <= -50 || temperatura >= 50 || isNaN(temperatura)){
            temperatura = parseInt(prompt("Dato inválido. Ingrese la temperatura del país:"));
        }
        //PUNTO A
        if(temperatura % 2 == 0){
            contadorTempPares++;
        }
        //PUNTO B
        if(habitantes < minimoHabitantes || flag == 0){
            minimoHabitantes = habitantes;
            paisHabitantes = pais;
            flag = 1;
        }
        //PUNTO C
        if(temperatura >= 40){
            contadorTempb++;
        }
        //PUNTO D
        acumuladorHabitantes = acumuladorHabitantes + habitantes;
        contador++;
        //PUNTO F
        if(temperatura < minimaTemp || flagb == 0){
            minimaTemp = temperatura;
            paisTemp = pais;
            flagb = 1;
        }

        seguir = prompt("Desea continuar ingresando?");
    }while( seguir == 's');

    promedio = acumuladorHabitantes / contador;

    document.write("Cantidad de temperaturas pares: " + contadorTempPares + "</br>");
    document.write("País con menos habitantes: " + paisHabitantes + "</br>");
    document.write("Cantidad de temperaturas menores a 40°: " + contadorTempb + "</br>");
    document.write("Promedio de habitantes: " + promedio + "</br>");
    document.write("País con menor temperatura: " + paisTemp + ", temperatura: " + minimaTemp + "</br>");
}
