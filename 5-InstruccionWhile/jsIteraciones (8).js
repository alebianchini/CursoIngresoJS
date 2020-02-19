function mostrar()
{

	var positivo=0;
	var negativo=1;
	var seguir;
	var numero;
	var flag = 0;

	
	do{
		numero = parseInt(prompt("Ingrese un número positivo o negativo"));

		while( isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un número positivo o negativo"));
		}

		if( numero < 0 ){
			negativo = numero * negativo;

			flag = 1;
		}
		else{
			positivo = numero + positivo;

		}

		seguir = prompt("Quiere agregar otro número?");

	} while( seguir == "s");

	if( flag == 0 ){
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN