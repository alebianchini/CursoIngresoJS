/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas;
    var precio;
    var preciofinal;
    var descuento;
    var marca;
    var impuesto;

    lamparas = parseInt(document.getElementById("Cantidad").value);

    while( isNaN(lamparas) || lamparas < 0 ){
        lamparas = parseInt(prompt("Error. ingrese un número"));
        document.getElementById("Cantidad").value = lamparas;
    
    }
    
    precio = lamparas * 35;

    marca = document.getElementById("Marca").value;

    
    if(lamparas > 5){
        
        descuento = (precio * 50) / 100;
        preciofinal = precio - descuento;
    }
    else if(lamparas == 5){
        switch( marca ){
            case "ArgentinaLuz" :
                descuento = (precio * 40) / 100;
                preciofinal = precio - descuento;
                break;

            default :
                descuento = (precio * 30) /100;
                preciofinal = precio - descuento;
        }
    }
    else if(lamparas == 4){
        switch( marca ){
            case "ArgentinaLuz" :
            case "FelipeLamparas" :
                descuento = (precio * 25) / 100;
                preciofinal = precio - descuento;
                break;
            
            default :
                descuento = (precio * 20) / 100;
                preciofinal = precio - descuento;
        }
    }
    else if(lamparas == 3){
        switch( marca ){
            case "ArgentinaLuz" :
                descuento = (precio * 15) / 100;
                preciofinal = precio - descuento;
                break;
            
            case "FelipeLamparas" :
                descuento = (precio * 10) / 100;
                preciofinal = precio - descuento;
                break;

            default :
                descuento = (precio * 5) / 100;
                preciofinal = precio - descuento;
        }
    }
    else{
        preciofinal = precio;
    }
    
    if(preciofinal > 120){
        impuesto = (preciofinal * 10) / 100;
        preciofinal = (preciofinal + impuesto) + " (Usted pagó $" + impuesto + " de IIBB).";
        
    }
    
    
    document.getElementById("precioDescuento").value = "$" + preciofinal;
}
