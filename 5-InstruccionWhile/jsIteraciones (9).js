function mostrar()
{

	var contador=0;
	var numero;
	var seguir;
	

	do{
		numero = parseInt(prompt("Ingrese un número positivo o negativo"));

		while( isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un número positivo o negativo"));
		}

		








		seguir = prompt("Quiere agregar otro número?");

	} while( seguir == "s");



}//FIN DE LA FUNCIÓN