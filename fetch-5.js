/* Clonando peticiones */
fetch('https://reqres.in/api/users/3')
    .then(resp => {
        /*
        clone() crea una nueva referencia de resp y debe ir antes de la 
        resp original, de lo contrario va a fallar
        */
        
        if(resp.ok) {
            return resp.clone().json()
    
            /*resp.json().then(usuario => {
                console.log(usuario.data);
            });*/
        } else {
            throw new Error("No existe el usuario");
        }

        
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });