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

	document.write("La suma de los números positivos es: " + positivo + "</br>");
	document.write("La suma de los números negativos es: " + negativo + "</br>");
	document.write("La cantidad de positivos es: " + contadorP + "</br>");
	document.write("La cantidad de negativos es: " + contadorN + "</br>");
	document.write("La cantidad de ceros es: " + contador0 + "</br>");
	document.write("La cantidad de números pares es: " + par + "</br>");
	document.write("El promedio de los números positivos es: " + positivo / contadorP + "</br>");
	document.write("El promedio de los números negativos es: " + negativo / contadorN + "</br>");
	document.write("La diferencia entre números positivos y negativos es: " + (contadorP - contadorN) + "</br>");


}//FIN DE LA FUNCIÓN