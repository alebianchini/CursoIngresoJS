/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var num;
    var temperatura;

    num = parseFloat(document.getElementById("Temperatura").value);

    while( isNaN(num) ){
        num = parseFloat(prompt("Error. ingrese un número"));
    }

    temperatura = (num - 32) * (5 / 9);

    alert(num + " grados Fahrenheit son " + temperatura.toFixed(1) + " grados centígrados.");
    
}

function CentigradosFahrenheit () 
{
    var num;
    var temperatura;

    num = parseFloat(document.getElementById("Temperatura").value);

    while( isNaN(num) ){
        num = parseFloat(prompt("Error. ingrese un número"));
    }

    temperatura = (num * (9 / 5)) + 32;

    alert(num + " grados centígrados son " + temperatura.toFixed(1) + " grados Fahrenheit.");
}
