function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

    switch( mes ) {
        case "Enero" :
        case "Febrero" :
        case "Marzo" :
        case "Abril" :
        case "Mayo" :
        case "Junio" :
            alert("Aun no llegamos al invierno");
            break;
        
        case "Julio" :
        case "Agosto" :
            alert("Abrigate que hace frío");
            break;

        default :
            alert("Ya pasamos el frío, hace calor!!");

    }




}//FIN DE LA FUNCIÓN