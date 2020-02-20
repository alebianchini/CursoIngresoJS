function mostrar()
{

	var flag = 0;
	var numero;
	var seguir;
	var maximo;
	var minimo;
	

	do{
		numero = parseInt(prompt("Ingrese un número: "));

		while( isNaN(numero)){
			numero = parseInt(prompt("Error. Ingrese un número válido: "));
		}

		
		if( flag == 0 || maximo < numero){
			
			maximo = numero;
		}
		
		if( flag == 0 || minimo > numero){

			minimo = numero;
			flag = 1;
		}


		seguir = prompt("Quiere agregar otro número?");

	} while( seguir == "s");


document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN