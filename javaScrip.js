/* Seleccionar los elementos HTML */
const ventanaCookies = document.getElementById("ventanaCookies");
const botonAceptar = document.getElementById("botonAceptar");
const botonCerrar = document.getElementById("botonCerrar");

/* Comprobar si el usuario ya aceptó las cookies */
if (localStorage.getItem("cookiesAceptadas") === "true") {
    ventanaCookies.classList.add("oculto");
}

/* Al aceptar, guardar la elección y ocultar la ventana */
botonAceptar.addEventListener("click", function() {
    localStorage.setItem("cookiesAceptadas", "true");
    ventanaCookies.classList.add("oculto");
});

/* Cerrar la ventana sin guardar la aceptación */
botonCerrar.addEventListener("click", function() {
    ventanaCookies.classList.add("oculto");
});