const button = document.querySelector(".button");
const contenedor = document.querySelector(".seleccionado");
const input = document.querySelector(".input-prueba");

//Esta opcion es la que se esta usando para hacer eventos
//button.addEventListener("click", saludar);

//contenedor.addEventListener("click",saludar2);

//Segunda manera en la que puedo manejar los eventos.(DESUSO)
/*button.onclick = ()=>{
    alert("Hola como estas?...");
}*/

//Esta es la manera correcta de de manejar los eventos
/*function saludar(){
    alert("di click en un boton");
    button.removeEventListener("click", saludar);
}*/

/* 
*   EVENTOS DE TECLADO
*/

/*
input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada");
});

input.addEventListener("keypress",(e)=>{
    console.log("Un usuario presiono una tecla");
});

input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada");
});*/

/* 
*  INTERFAZ DE EVENTOS 
*/

//Con estas test lineas de codigo puedo capturar y mostrar en pantalla
//lo que selecciono el usuario
input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start,end);
})
