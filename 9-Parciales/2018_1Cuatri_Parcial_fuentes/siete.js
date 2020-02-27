function mostrar()
{
    var nota;
    var sexo;
    var notaMenor;
    var sexoMenor;
    var contadorVaronesMas6 = 0;
    var acumuladorNotas = 0;
    var promedio;
    var flag = 0;


    
    for(var i = 0; i < 5; i++){
        
        nota = parseInt(prompt("Ingrese su nota:"));
            while( nota < 0 || nota > 10 || isNaN(nota)){
                nota = parseInt(prompt("Error. Ingrese una nota valida:"));
        }
        sexo = prompt("Ingrese f o m según su sexo:");
            while( sexo != 'f' && sexo != 'm'){
                sexo = prompt("Error. Ingrese f o m según su sexo:");
        }

        acumuladorNotas = acumuladorNotas + nota;
        
        if(nota >= 6 && sexo == 'm'){
            contadorVaronesMas6++;
        }
        if( flag == 0 || notaMenor > nota){

			notaMenor = nota;
            sexoMenor = sexo;
            flag = 1;
		}


    }
    
    promedio = acumuladorNotas / 5;

    alert("Promedio Notas: " + promedio + "\nNota Baja: " + notaMenor + "\nSexo nota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6);
/*    
    document.write("A) El promedio de las notas totales es: " + promedio + "</br>");
    document.write("B) La nota más baja es " + notaMenor + " y el sexo de esa persona es " + sexoMenor + "</br>");
    document.write("C) La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorVaronesMas6);
*/    
// Mediante un ALERT se puede hacer de esta manera:
// alert("Promedio Notas: " + promedio + "\nNota Baja: " + notaMenor + "\nSexo nota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6);

}
