function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch( mes ) {
    case "Enero" :
        alert("Que comiences bien el año!!");
        break;

    case "Marzo" :
        alert("A clases!!!");
        break;

    case "Julio" :
        alert("Se vienen las vacaciones!!!");
        break;

    case "Diciembre" :
        alert("Felices Fiestas!!!");
        break;
    
    default :
        alert("A ese mes no lo tuve en cuenta");

}
}



//FIN DE LA FUNCIÓN
/* De esta manera podría hacerlo con IF. Pero no sería la más optima.
var mes = document.getElementById('mes').value;

if( mes == "Enero"){
    alert("Que comiences bien el año");
}
else if( mes == "Marzo"){
    alert("A clases!!!");
}
else if( mes == "Julio"){
    alert("Se vino el frio");
}
else if( mes == "Diciembre"){
    alert("Felices Fiestas");
}
*/