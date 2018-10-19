function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(numero +1);            
        }, 800);
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            //resolve(numero +1)
            reject("Sumar rapido falló")
        , 1000);
    })
}

/* Promise.race: Pone a ejecutar todas las funciones dentro del arreglo
y obtiene el primer valor respondido.
*/
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(respuestas => {
        console.log(respuestas)
    })
    .catch(console.log);