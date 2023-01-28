const button = document.querySelector(".button");

//Esta opcion es la que se esta usando para hacer eventos
button.addEventListener("click", saludar);

//Segunda manera en la que puedo manejar los eventos.(DESUSO)
/*button.onclick = ()=>{
    alert("Hola como estas?...");
}*/

//Esta es la manera correcta de de manejar los eventos
function saludar(){
    alert("saludar desde los eventos");
    button.removeEventListener("click", saludar);
}