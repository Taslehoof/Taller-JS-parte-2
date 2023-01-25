let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El Alto es: ${alto}, el Ancho es. ${ancho}`)

if (comprar){
    alert("compra realizada exitosamente");
} else {
    alert("compra cancelada");
}