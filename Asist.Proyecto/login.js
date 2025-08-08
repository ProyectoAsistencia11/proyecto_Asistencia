function validar() {
  const clave = document.getElementById("clave");
  const mensaje = document.getElementById("mensaje-error");
  const valor = clave.value.trim();

  // Resetear estilos
  clave.classList.remove("error");
  clave.classList.remove("temblar");
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

  // Si es correcta
  window.location.href = "Inicio/Inicio.html"; // ruta relativa
}

// document	Representa todo el HTML cargado en la página. Es el punto de entrada para manipular el DOM.
// .getElementById("clave")	Busca el elemento HTML que tiene el atributo id="clave". En tu caso, es el <input> donde se escribe la contraseña.
// .value	Extrae el contenido actual que el usuario escribió en ese campo. Es decir, la contraseña que se quiere validar.

//.classList busca en el estilos.css esa clase.

document.getElementById("clave").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    validar();
  }
});
