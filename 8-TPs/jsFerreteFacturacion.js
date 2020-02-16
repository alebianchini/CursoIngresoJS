/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    var num2;
    var num3;

    num1 = parseFloat(document.getElementById("PrecioUno").value);
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);
    
    alert( num1 + num2 + num3 );
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;

    num1 = parseFloat(document.getElementById("PrecioUno").value);
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    alert((num1 + num2 + num3) / 3);
}
function PrecioFinal () 
{
    var num1;
    var num2;
    var num3;
    var iva;

    num1 = parseFloat(document.getElementById("PrecioUno").value);
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    iva = ((num1 + num2 + num3) * 21 / 100);

    alert(num1 + num2 + num3 + iva);
}