


// Guardamos el origen en sessionStorage
sessionStorage.setItem("origen", "index");

// Bloqueo de retroceso en index.html
history.pushState(null, "", location.href);
window.addEventListener("popstate", () => {
  history.pushState(null, "", location.href);
});

// Limpieza de sesión previa
sessionStorage.removeItem("cerrarSesion");
sessionStorage.removeItem("logueado");

// Validación de contraseña
function validar() {
  const clave = document.getElementById("clave");
  const mensaje = document.getElementById("mensaje-error");
  const valor = clave.value.trim();

  clave.classList.remove("error", "temblar");
  mensaje.textContent = "";
  mensaje.classList.remove("visible");

  if (valor === "") {
    mensaje.textContent = "Campo obligatorio";
    mensaje.classList.add("visible");
    clave.classList.add("temblar");
    return;
  }

  if (valor !== "1234") {
    mensaje.textContent = "Contraseña incorrecta";
    mensaje.classList.add("visible");
    clave.classList.add("error");
    return;
  }

  const carga = document.getElementById("pantalla-carga");
  carga.classList.add("visible");
  // Si es correcta
  sessionStorage.setItem("logueado", "true");
  // sessionStorage.setItem("origen", "index");
  sessionStorage.setItem("sesionActiva", "true");

  setTimeout(() => {
    location.href = "./Inicio/Inicio.html";
  }, 2000); // Espera 2 segundos para mostrar la animación

}

document.getElementById("clave").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    validar();
  }
});

document.getElementById("btnAcceder").addEventListener("click", validar);
