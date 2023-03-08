/*const objeto ={
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
};*/

const obtenerInformacion = (text) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}

//obtenerInformacion().then(resultado => console.log(resultado))

//Async y await
/*const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();*/

const mostrarData = async()=>{
    data1 = await obtenerInformacion('1: pito');
    data2 = await obtenerInformacion('2: bernardo');
    data3 = await obtenerInformacion('3: eduardo');
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();