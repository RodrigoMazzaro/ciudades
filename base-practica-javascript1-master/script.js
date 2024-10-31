import { buenosAires, miami, roma, newYork } from './ciudades.js';

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
const imagenElemento = document.getElementById('destinoImagen');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        // Quitar la clase 'active' de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase 'active' al enlace actual
        this.classList.add('active');

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        imagenElemento.src = contenido.imagen; // Cambia la imagen
        imagenElemento.style.display = 'block'; // Muestra la imagen

        // Agregar console.log para verificar la ruta de la imagen
        console.log("Imagen cargada:", imagenElemento.src);
    });
});

// Función para traer la info correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Buenos Aires': buenosAires,
        'Miami': miami,
        'Roma': roma,
        'New York': newYork
    };

    return contenido[enlace];
}



