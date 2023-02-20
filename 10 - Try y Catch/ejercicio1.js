const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado, mensaje, prevRes;
    try{
       prevRes = parseInt(document.getElementById('nota').value);
       if (isNaN(prevRes)) {
        throw "Gracioso";
       }
       mensaje = definirMensaje(prevRes);
       resultado = verificarAprovacion(8,5,prevRes);
    }catch(e){
        resultado = "¿SOS GRACISO?";
        mensaje = "He descubierto que intentaste hakear el sitio";
    }
    abrirModal(resultado,mensaje);
})

//Funcion para que muestre un mensaje distinto con cada nota
//que le haya quedadon en el promedio
const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "sos malisimo para mi materia";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy Mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puede mejorar";
        break;  
        case 8: resultado = "¡Muy bien!";
        break;
        case 9: resultado = "¡Excelente!";
        break;
        case 10: resultado = "¡Insuperable hijo de su pinshi madre!";
        break;
        default: resultado = null;
    }
    return resultado;
}

//Funcion para verificar si aprobo o no
const verificarAprovacion = (nota1, nota2, prevRes)=>{
    promedio = (nota1+nota2+prevRes)/3;
    if (promedio >= 7){
        //Si Aprobo el mensaje es en verde
        return "<span class='green'> APROBADO</span>";
    } else {
        //En caso contrario es en Rojo
        return "<span class='red'> DESAPROBADO</span>"; 
    }
}


const abrirModal = (res, msg)=>{
    //Esto es para que se haga presente el mensaje en pantalla
    //con el promedio y si aprobo o no en la meteria
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}