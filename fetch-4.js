/* Cargar imagen en el HTML*/

let img = document.querySelector('img');
fetch('spiderman-unavailable.jpg')
    .then(resp => resp.blob())
    .then(imagen => {
        var imgPath = URL.createObjectURL(imagen);
        img.src = imgPath;
    });