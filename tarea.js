// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1

/*fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(person => {
        console.log(person.name);
        console.log(person.gender);
    })
    .catch(error => {
        console.log("Error fetching data from swapi.co");
        console.log(error);
    });
*/

// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2



fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(postData)
    .then(resp => resp.json())
    .then(log => {
        console.log(log.id);
        console.log(log.createdAt);
    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error)
    });


function postData(person) {
    let data = {name: person.name, gender: person.gender};
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
