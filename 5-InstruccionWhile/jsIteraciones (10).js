function mostrar()
{

	var numero;
	var contadorP = 0;
	var contadorN = 0;
	var contador0 = 0;
	var negativo = 0;
	var positivo = 0;
	var seguir;
	var par = 0;
	var promedioN = 0;
	var promedioP = 0;

	do{
		numero = parseInt(prompt("Ingrese un número: "));

		while( isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un número válido: "));
		}

		if( numero < 0 ){
			negativo = numero + negativo;
			contadorN ++;

		}
		else if( numero > 0 ){
			positivo = numero + positivo;
			contadorP ++;
		}
		else{
			contador0 ++;
		}

		if( numero % 2 == 0){
			par ++;
		}

		seguir = prompt("Quiere agregar otro número?");

	
	} while(seguir == 's');

	document.write("1 - La suma de los números positivos es: " + positivo + "</br>");
	document.write("2 - La suma de los números negativos es: " + negativo + "</br>");
	document.write("3 - La cantidad de positivos es: " + contadorP + "</br>");
	document.write("4 - La cantidad de negativos es: " + contadorN + "</br>");
	document.write("5 - La cantidad de ceros es: " + contador0 + "</br>");
	document.write("6 - La cantidad de números pares es: " + par + "</br>");
	document.write("7 - La diferencia entre números positivos y negativos es: " + (contadorP - contadorN) + "</br>");
	if( contadorP != 0){
		promedioP = positivo / contadorP;
	}
	document.write("8 - El promedio de los números positivos es: " + promedioP + "</br>");
	if( contadorN != 0){
		promedioN = negativo / contadorN;
	}
	document.write("9 - El promedio de los números negativos es: " + promedioN + "</br>");

}//FIN DE LA FUNCIÓN