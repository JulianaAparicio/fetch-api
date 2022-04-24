// CLASE 17 - APIs I ---- MESA DE TRABAJO EQUIPO 10

// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona

function callApi() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            //console.log(data)
            renderizarDatosUsuario(data.results);
        });

}
callApi();



function renderizarDatosUsuario(datos) {

    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.

    foto.setAttribute('src', datos[0].picture.thumbnail);
    nombre.innerText = datos[0].name.first + " " + datos[0].name.last;
    email.innerText = datos[0].email;

}

const tarjeta = document.querySelector('.tarjeta');
let foto = document.createElement('img');
let nombre = document.createElement('p');
let email = document.createElement('p');
tarjeta.appendChild(foto);
tarjeta.appendChild(nombre);
tarjeta.appendChild(email);


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, 
//sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada 
//cada vez que se escuche un click.

const boton = document.querySelector('button');
boton.addEventListener('click', (e) => {
    callApi();
});