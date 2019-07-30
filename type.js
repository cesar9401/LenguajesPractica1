console.log("Hola Mundo");
var cadena = document.getElementById("string");
var historial = document.getElementById("historial");
var error = document.getElementById("error");
error.style.color = "red";
function analizarString() {  
    if (cadena.value.length == 0) {        
        return false;
    }

    var listo = false;
    //Verifioca que solo sea un simbolo
    var contador = 0;
    for(var i=0; i<cadena.value.length; i++){
        if(cadena.value.charCodeAt(i)>=35 && cadena.value.charCodeAt(i)<=37){
            contador++;
        }
    }
    if(contador == cadena.value.length){
        alert("es un simbolo");
        listo = true;
    }
    
    //Verifica que solo sea numero
    contador = 0;
    for(var i=0; i<cadena.value.length; i++){
        if(cadena.value.charCodeAt(i)>=48 && cadena.value.charCodeAt(i)<=57){
            contador++;
        }
    }
    if(contador == cadena.value.length){
        alert("es un numero");
        listo = true;
    }

    //Verifica que sea un identificador(primer caracter letra, seguido de uno o mas letras o numeros)
    contador = 0;
    if((cadena.value.charCodeAt(0)>=97 && cadena.value.charCodeAt(0)<=122) || cadena.value.charCodeAt(0) == 241){
        for(var i=0; i<cadena.value.length; i++){

            if(cadena.value.charCodeAt(i)>=48 && cadena.value.charCodeAt(i)<=57){
                contador++;
            }
            
            if((cadena.value.charCodeAt(i)>=97 && cadena.value.charCodeAt(i)<=122) || cadena.value.charCodeAt(i) == 241){
                contador++
            }
        }    
        if(contador == cadena.value.length){
            alert("es un identificador, inicial letra mas letras o numeros");
            listo = true;
        }
    }
    
    if (!listo) {
        alert("Error");
        error.innerHTML = error.innerHTML + cadena.value + "<br>";
    }
    else {
        historial.innerHTML = historial.innerHTML + cadena.value + "<br>";
    }
    
    
}

