//let peticion;
/*const serializado = '{"variable1":" PEDRO", "variable2 ":"JORGE"}'

//Convierte un dato de JS en una cadena de texto JSON
serializado = JSON.stringify(deserializado)
console.log(serializado.variable1)

//Convierte un string con estructura JSON a formato JSON
const deserializado = JSON.parse(serializado)
console.log(deserializado.variable1)*/

/*if (window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
} else {
     peticion = new ActiveXObject("microsoft.XMLHTTP")
}*/

//AJAX
//Como AJAX no es soportado por la mayoria de los navegadores
//hay que hacer una salvedad para que pueda correr dentro del navegador
/*peticion.addEventListener("load",()=>{
    //console.log(peticion.readyState);
    //console.log(peticion.response);

    /*if(peticion.readyState == 4) {
        console.log(peticion.response)
    }*/
    /*let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "lo siento, no se ha encontrado el recurso"*/
    //Con esta ultima sentencia estoy deserealizando el JSON para poder tenerlo
    //en formato tradicional(OBJETO)
/*    console.log(JSON.parse(respuesta))

})

peticion.open("GET","informacion.txt");

peticion.send()*/

//POST
/*peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "lo siento, no se ha encontrado el recurso"
    console.log(JSON.parse(respuesta))
})

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));*/