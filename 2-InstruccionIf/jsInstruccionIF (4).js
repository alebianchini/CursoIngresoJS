function mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
//si la edad esta dentro del rango
 /*   if(edad >= 13 && edad < 18){
        alert ("Usted es un adolescente");
}*/

//si(if) la edad no(not) esta fuera del rango
    if( !( edad < 13 || edad > 17)) {
        alert("Es adolescente");
    }



}//FIN DE LA FUNCIÓN