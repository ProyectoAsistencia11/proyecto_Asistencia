
//----------------------------------carga---------------------------------------------------
function listaPrincipal() {
  // Obtener los valores del formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const tutor = document.querySelector('input[name="nombretutor"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const aula = document.querySelector('select[name="aula"]').value;

  // Crear objeto con los datos del alumno
  const datos = { nombre, tutor, telefono, aula };

  // Generar una clave única para el aula (ej: listaAlumnos_3_4)
  const clave = `listaAlumnos_${aula.replace('-', '_').replace(' ', '')}`;

  // Obtener la lista actual del aula desde localStorage
  let lista = JSON.parse(localStorage.getItem(clave)) || [];

  // Agregar el nuevo alumno a la lista
  lista.push(datos);

  // Guardar la lista actualizada en localStorage
  localStorage.setItem(clave, JSON.stringify(lista));

  alert("Alumno agregado correctamente");
}


let nombreAlumnoActual = "";


//---------------------para mostrar la ficha de cada alumno-------------------------------
function mostrarModelo() {
  const formulario = document.getElementById("miFormulario");
  const nombre = formulario.elements["nombre"].value.trim();
  const tutor = formulario.elements["nombretutor"].value.trim();
  const telefono = formulario.elements["telefono"].value.trim();
  const aula = formulario.elements["aula"].value;

  nombreAlumnoActual = nombre;  

  if (!nombre || !tutor || !telefono || !aula) {
    alert("Por favor, completá todos los campos antes de mostrar el modelo.");
    return;
  }

  document.getElementById("nombre-alumno").textContent = nombre;
  document.getElementById("tutor-alumno").textContent = tutor;
  document.getElementById("telefono-alumno").textContent = telefono;
  document.getElementById("aula-alumno").textContent = aula;

  const qrContenedor = document.getElementById("qr-alumno");
  qrContenedor.innerHTML = "";
  new QRCode(qrContenedor, {
    text: JSON.stringify({ nombre, aula }),
    width: 128,
    height: 128
  });

  document.getElementById("ficha-modelo").style.display = "block";
}
function imprimirFicha(){
  window.print();
}
function guardarFicha() {
  const ficha = document.getElementById("ficha-modelo");

  ficha.style.visibility = "visible"; // más estable que display:block

  setTimeout(() => {
    const opciones = {
      margin: 10,
      filename: `Ficha_${nombreAlumnoActual}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opciones).from(ficha).save();
  }, 500); // aumentamos el delay para asegurar render completo
}


function cargarFoto(event) {
  const archivo = event.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(e) {
      document.getElementById("foto-preview").src = e.target.result;
    };
    lector.readAsDataURL(archivo);
  }
}


//para cerrar la ficha del alumno
function cerrarFicha() {
  document.getElementById("ficha-modelo").style.display = "none";
  document.getElementById("miFormulario").reset(); // Limpia los campos del formulario
  const qrContenedor = document.getElementById("qr-alumno");
  qrContenedor.innerHTML = ""; // Limpia el QR
  //limpia foto
  document.getElementById("foto-preview").src = "../assets/default-foto.png";
  document.getElementById("foto-input").value = "";
}



