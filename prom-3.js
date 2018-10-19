function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numero +1);
            //reject("Sumar lento falló");
        }, 800);
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero +1), 300);
    })
}

// Si una funcion falla, TODO falla
// Promise.all recibe un arreglo de cualquier tipo de objeto

let cosas = [sumarLento(5), sumarRapido(10), true, "Hola putos"];
Promise.all(cosas)
    .then(respuestas => {
        console.log(respuestas)
    })
    .catch(console.log);

/*sumarLento(5).then(console.log);
sumarRapido(10).then(console.log);*/