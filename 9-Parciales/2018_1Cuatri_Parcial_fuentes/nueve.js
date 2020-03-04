function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var contadorTempPar = 0;
    var contTempMenorCero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var promedio = 0;
    var pesoMax;
    var marcaMax;
    var pesoMin;
    var pesoMaxBajoCero;
    var seguir;
    var flag = 0;
    var flag2 = 0;

    do{
        marca = prompt("Ingrese la marca del producto: ");
        
        peso = prompt("Ingrese el peso del producto: ");
        while( peso < 1 || peso > 100 || isNaN(peso)){
            peso = prompt("Peso invalido. Ingrese el peso del producto: ");
        }
        
        temperatura = prompt("Ingrese la temperatura de conservación del producto: ");
        while( temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
            temperatura = prompt("Temperatura inválida. Ingrese la temperatura de conservación del producto: ");
        }

        if(temperatura % 2 == 0){
            contadorTempPar++;
        }
        
        if(temperatura < 0){
            contTempMenorCero++;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contadorPeso++;

        if(pesoMax < peso || flag == 0){
            pesoMax = peso;
        }
        if(pesoMin < peso || flag == 0){
            pesoMin = peso;
            flag = 1;
        }
        if((temperatura < 0) && (pesoMaxBajoCero < peso || flag2 == 0)){
            pesoMaxBajoCero = peso;
            marcaMax = marca;
            flag2 = 1;
        }


        seguir = prompt("Desea continuar?");
    }while(seguir == 's');

    if(contadorPeso =! 0){
    promedio = acumuladorPeso / contadorPeso;
    }

    document.write("La cantidad de temperaturas pares: " + contadorTempPar + "</br>");
    document.write("La marca del producto más pesado bajo cero: " + marcaMax + " su peso: " + pesoMaxBajoCero + "</br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados: " + contTempMenorCero + "</br>");
    document.write("El promedio del peso de todos los productos: " + promedio + "</br>");
    document.write("Peso Máximo: " + pesoMax + "</br>");
    document.write("Peso Mínimo: " + pesoMin + "</br>");


}

/*
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado con temperatura menor a 0.
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

// Así lo hizo el profesor:

function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var marcaPesada;
    var maximoPeso;
    var flag = 0;
    var contadorCongelados = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var pesoMax;
    var pesoMin;

    do {
        // pido los datos
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }

        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalido. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > maximoPeso) && temperatura > 0) {
            maximoPeso = peso;
            marcaPesada = marca;

            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }


        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');


    promedioPeso = acumuladorPeso / contador;






    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    if (flag == 0) {
        document.write("b) La marca del producto más pesado no congelado: No se ingresaron productos no congelados</br>");

    }
    else {

        document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + " Peso: " + maximoPeso + "</br>");
    }
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("e) Maximo: " + pesoMax + "</br>");
    document.write("e) Minimo: " + pesoMin + "</br>");

}

*/