function sumarUno(numero) {
    var promesa = new Promise(function(resolve, reject) {
        console.log(numero);
        if(numero >= 7) {
            reject('El numero es muy alto');
        }
        setTimeout(function() {
            resolve(numero + 1);
        }, 800);
    });
    return promesa;
}

sumarUno(5).then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoNumero => console.log(nuevoNumero)
    )
    .catch(error => {
        console.log("Error en promesa");
        console.log(error);
    });

// Manejo de errores:

/*sumarUno(8)
    .then(nuevoValor => {
        console.log(nuevoValor);
    })
    .catch(error => {
        console.log("Error en promesa");
        console.log(error);
    });*/