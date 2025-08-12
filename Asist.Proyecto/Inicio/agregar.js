// // Detecta el movimiento del mouse
// document.addEventListener('mousemove', function (e) {
//   const menu = document.getElementById('menu-aulas');

//   // Si el mouse está a menos de 30px del borde izquierdo
//   if (e.clientX < 300) {
//     menu.style.left = '0'; // Muestra el menú
//   } else {
//     menu.style.left = '-300px'; // Oculta el menú
//   }
// });
function direAula1y2(){
   window.location.href = "../listagnral-aulas/listagnral.html"; 
}
function direAula3y4(){
   window.location.href = "../listagnral-aulas/listagnral-aula3-4.html"; 
}

function direAula5y6(){
   window.location.href = "../listagnral-aulas/listagnral-aula5-6.html";
}

function direAula7y8(){
   window.location.href = "../listagnral-aulas/listagnral-aula7-8.html";
}

function direAula9y12(){
   window.location.href = "../listagnral-aulas/listagnral-aula9-12.html";
}

function direAuladelaCalma(){
   window.location.href = "../listagnral-aulas/listagnral-auladelaCalma.html";
}

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu-aulas');
  menu.classList.toggle('activo'); // Alterna visibilidad
});

function mostrarFormulario() {
  document.getElementById("modal").style.display = "flex";
}


function cerrarformulario() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("miFormulario").reset(); // Limpia los campos
}

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

  // // Redirigir a la página correspondiente del aula
  // if (aula === "1-2") {
  //   window.location.href = "../listagnral-aulas/listagnral.html";
  // } else if (aula === "3-4") {
  //   window.location.href = "../listagnral-aulas/listagnral-aula3-4.html";
  // } else if (aula === "5-6") {
  //   window.location.href = "../listagnral-aulas/listagnral-aula5-6.html";
  // } else if (aula === "7-8") {
  //   window.location.href = "../listagnral-aulas/listagnral-aula7-8.html";
  // } else if (aula === "9-12") {
  //   window.location.href = "../listagnral-aulas/listagnral-aula9-12.html";
  // } else if (aula === "calma") {
  //   window.location.href = "../listagnral-aulas/listagnral-auladelaCalma.html";
  // }
}





document.querySelector('.Botones').addEventListener('click', function (e) {
  e.preventDefault();

  const nombre = document.querySelector('input[name="nombre"]').value;
  const tutor = document.querySelector('input[name="nombretutor"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const aula = document.querySelector('select[name="aula"]').value;

  const datos = {
    nombre,
    tutor,
    telefono,
    aula
  };

  const qrData = JSON.stringify(datos);

  // Mostrar datos en el modal
  const info = `
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Tutor:</strong> ${tutor}<br>
    <strong>Teléfono:</strong> ${telefono}<br>
    <strong>Aula:</strong> ${aula}<br>
  `;
  document.getElementById('info-alumno').innerHTML = info;

  // Generar QR en el modal
  const qrContenedor = document.getElementById('qr-imprimir');
  qrContenedor.innerHTML = '';
  new QRCode(qrContenedor, {
    text: qrData,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Mostrar el modal
  document.getElementById('modal-imprimir').style.display = 'flex';
});
