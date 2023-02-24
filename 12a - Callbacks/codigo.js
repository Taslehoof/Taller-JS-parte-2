//PRIMERA VERSION DE CALLBACKS
/*function prueba(callback){
    callback("roberto");
}

function decirNombre(nombre){
   console.log(nombre);
}

prueba(decirNombre);*/

//VERSION RESUMIDA
/*function prueba(callback){
    callback("pedro");
}

prueba(function decirNombr(nombre){
   console.log(nombre);
})*/

class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Lucas Dalto","@SoyDalto"],
    ["Sergio Conti","@SergioConti"],
    ["Carolina Rivas","@CaroRivas"],
    ["Mat Frasser","@MattFrasser"],
    ["Cartucho Rivas","@CartuRivas|"],
];

let personas = [];

for (let i = 0; i< data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1])
}

//Con esto muestro el listado en consola del navegador
//console.log(personas);

const obtenerPersona = (id,cb) =>{
    if(personas[id]== undefined){
        cb("No se ha encontrado la persona");
    }else {
        cb(null,personas[id],id)
    }
}


const obtenerInstagram = (id,cb) =>{
    if(personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    }else {
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(3,(err,persona,id)=>{
    if(err){
        console.log(err)        
    } else {
        console.log(persona.nombre);
        console.log(obtenerInstagram(id,(err,instagram)=>{
            if (err){
                console.log(err);
            }else {
                console.log(instagram);
            }
        }));
    }
})
