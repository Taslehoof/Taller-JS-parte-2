//Libreria Axios
//Esta basado en promesas

//ESto seria la version en Fetch
/*fetch("informacion.txt")
    .then(res=>res.json())
    .then(res=>console.log(res))*/
     
//Por defecto al igual que Fetch, Axios trabaja con GET pero
// se puede poner para que sea POST
//axios("https://reqres.in/api/unknown/2")
  //  .then(res=>console.log(res))

//POST
axios.post("https://reqres.in/api/unknown/2")
    .then(res=>console.log(res))
