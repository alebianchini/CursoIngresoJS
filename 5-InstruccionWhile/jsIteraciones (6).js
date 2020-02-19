function mostrar()
{

	var numero;
	var acumulador = 0;
	var contador = 0;
//cuando una variable acumula en valores constantes ( variable + 1 + 1 + 1), hace de CONTADOR.
//Cuando lo hace en valores variables ( variable + X + X + X ), hace de ACUMULADOR. --> X= numero.
	while( contador < 5 ){
		numero = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + numero;
		contador ++;
	}
	
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
	
}//FIN DE LA FUNCIÓN