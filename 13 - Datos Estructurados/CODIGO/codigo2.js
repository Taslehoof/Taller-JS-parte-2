//______________________
/*FETCH
Por defecto, Fetch esta puesto para hacer el GET. En caso 
de que yo quiera hacer un POST, se lo tengo que especificar
para que cambien la metodologia, asi podria hacer lo contrario
*/

//Con esta peticion lo que hago es que me devuelva una cadena
// para poder asi trabajar el objeto como si fuera una cadena de texto
//peticion = fetch("https://reqres.in/api/unknown/2")
  //  .then(res=>res.text())
  //  .then(res=>console.log(res))

//Aqui estoy convirtiendo lo estoy convirtiendo directamente en un JSON
//para poder trabajarlo con un JSON y asi poder ver los datos mas claramente
/*peticion = fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.json())
    .then(res=>console.log(res))*/


//POST 
peticion = fetch("https://reqres.in/api/unknown/2",{
    method: "POST",
    body : JSON.stringify({
        "nombre" : "Sergio",
        "apellido" : "Conti"
    }),
    headers: {"Content-type": "application/json"}
})

    .then(res=>res.json())
    .then(res=>console.log(res))