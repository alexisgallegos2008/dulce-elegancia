
// ===================================
// DULCE ELEGANCIA - script.js
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    // MENÚ DE NAVEGACIÓN PARA CELULARES
    const menuToggle = document.getElementById("menuToggle");
    const navegacion = document.getElementById("navegacion");

    if (menuToggle && navegacion) {

        menuToggle.addEventListener("click", function () {
            const abierto = navegacion.classList.toggle("abierto");

            menuToggle.setAttribute("aria-expanded", abierto);
            menuToggle.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );

            menuToggle.textContent = abierto ? "✕" : "☰";
        });

        // CERRAR EL MENÚ AL SELECCIONAR UNA SECCIÓN
        const enlaces = navegacion.querySelectorAll("a");

        enlaces.forEach(function (enlace) {
            enlace.addEventListener("click", function () {
                navegacion.classList.remove("abierto");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.textContent = "☰";
            });
        });
    }

    // ACTUALIZAR AUTOMÁTICAMENTE EL AÑO
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // ANIMACIÓN SUAVE PARA LAS SECCIONES
    document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {
            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const seccion = document.querySelector(destino);

            if (seccion) {
                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Actualizar el fragmento de la dirección
                history.replaceState(null, "", destino);
            }
        });

    });

});
