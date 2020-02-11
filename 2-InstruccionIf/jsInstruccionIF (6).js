function mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
//La manera más sencilla sería esta, utilizando las preguntas if más sencillas, que son adulto y niño
    if(edad > 17){
        alert("Es adulto");
    }
    else if(edad < 13) {
        alert("Es niño");
    }
    else{
        alert("Es adolescente");
    }

//pero de esta manera lo hice yo en un principio, también funciona
/*    if(edad >= 18){
        alert("Es adulto");
    }
    else if(edad >= 13 && edad < 18) {
        alert("Es adolescente");
    }
    else{
        alert("Es niño");
    } */
}//FIN DE LA FUNCIÓN