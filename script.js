
"use strict";

// FECHA OFICIAL: 23 de julio de 2025.
// En JavaScript, enero es 0 y julio es 6.
const fechaInicio = new Date(2025, 6, 23, 0, 0, 0);

function actualizarContador() {
    const ahora = new Date();
    const contador = document.getElementById("contador");

    if (!contador) return;

    // Si la fecha aún no llega, mostrar el tiempo restante.
    if (ahora < fechaInicio) {
        const diferencia = fechaInicio.getTime() - ahora.getTime();

        const dias = Math.floor(diferencia / 86400000);
        const horas = Math.floor((diferencia % 86400000) / 3600000);
        const minutos = Math.floor((diferencia % 3600000) / 60000);
        const segundos = Math.floor((diferencia % 60000) / 1000);

        contador.textContent =
            `Faltan ${dias} días, ${horas} horas, ` +
            `${minutos} minutos y ${segundos} segundos 💗`;

        return;
    }

    // Calcular el tiempo transcurrido.
    let totalSegundos = Math.floor(
        (ahora.getTime() - fechaInicio.getTime()) / 1000
    );

    const dias = Math.floor(totalSegundos / 86400);
    totalSegundos %= 86400;

    const horas = Math.floor(totalSegundos / 3600);
    totalSegundos %= 3600;

    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    contador.textContent =
        `${dias} días, ${horas} horas, ` +
        `${minutos} minutos y ${segundos} segundos 💗`;
}

// Actualizar inmediatamente y después cada segundo.
actualizarContador();
setInterval(actualizarContador, 1000);

// BOTÓN DE LA SORPRESA.
const boton = document.getElementById("botonSorpresa");
const mensaje = document.getElementById("mensajeSorpresa");

if (boton && mensaje) {
    boton.addEventListener("click", function () {
        mensaje.hidden = !mensaje.hidden;

        boton.textContent = mensaje.hidden
            ? "Abrir mi sorpresa 💌"
            : "Cerrar sorpresa 💗";

        if (!mensaje.hidden) {
            mensaje.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}
