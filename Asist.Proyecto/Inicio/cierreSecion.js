// Trampa de historial para interceptar retroceso
history.pushState(null, "", location.href);
history.pushState(null, "", location.href);


window.addEventListener("popstate", () => {
  mostrarModalCerrarSesion(); // Tu función que muestra el modal
  // Reinsertamos la trampa para seguir bloqueando
  history.pushState(null, "", location.href);
});

function mostrarModalCerrarSesion() {
  const modal = document.getElementById("modalCerrarSesion");
  modal.style.display = "flex"; // o "block" según tu diseño
}



function cerrarSesion() {
  sessionStorage.removeItem("sesionActiva");
  sessionStorage.removeItem("logueado");
  location.replace("../index.html");
}

function cerrarModal() {
  document.getElementById("modalCerrarSesion").style.display = "none";
}
