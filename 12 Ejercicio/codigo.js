const materiasHTML = document.querySelector(".materias");

//Vector con las notas y las materias que simulo traer del servidor
const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },{
        nombre: "Calculo 3",
        nota: 8
    }, {
        nombre: "Bases de datos 3",
        nota: 9
    },{
        nombre: "Matematica Discretas 2",
        nota: 7
    }, {
        nombre: "Promgramacion 4",
        nota: 8
    }
]

//Generacion de la Promesa para poder hacer la peticion de las materias
const obtenerMateria = (id) =>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*1400);
    })
}

//Async Await para poder hacer la muestra de las materias en pantalla
//En este caso esta simulado el servidor para poder hacer la peticion Asincrona al mismo
const devolverMaterias = async()=>{
    let materia = [];
    for (let i= 0; i<materias.length; i++){
        materia[i] = await obtenerMateria(i);
        //materia[i].then(mat => console.log(mat))
        let newHTMLCode= `
            <div class="materia">
                <div class="nombre">${materia[i].nombre}</div>
                <div class="nota">${materia[i].nota}</div>
            </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()