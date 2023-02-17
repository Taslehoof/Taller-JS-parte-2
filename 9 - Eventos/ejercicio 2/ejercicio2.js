//Gran Array con los datos de los usuarios que seran mostrados en pantalla
let alumnos =[{
    nombre: "Sergio Conti",
    email: "seracon@gmail.com",
    materia: "Programacion 1",
},{
    nombre: "Karin Guerra",
    email: "karin@gmail.com",
    materia: "Fisica 1",
},{
    nombre: "Jorge Ramirez",
    email: "ramirez@gmail.com",
    materia: "Calculo 2",
},{
    nombre: "Facundo Roberto",
    email: "roberto@gmail.com",
    materia: "Literatura",
},{
    nombre: "Coffla XD",
    email: "coffla@gmail.com",
    materia: "Recreo",
}];

//Vamos a capturar el evento del boton para poder usarlo
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
}

//Con esta linea completo dinamicamente los datos en pantalla
//para poder mostrarlos desde el Array mas arriba
contenedor.innerHTML=htmlCode;

//Con esto capturo el Evento en el boton y confirmo las semanas 
boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida")
        //con este bucle selecciono todos los elementos y los paso a HTML para 
        //que no se puedan modificar
        for(elemento in elementos){ 
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})