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
function direccion(){
   window.location.href = "../listagnral-aulas/listagnral.html"; 
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
  const nombre = document.querySelector('input[name="nombre"]').value;
  const tutor = document.querySelector('input[name="nombretutor"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const aula = document.querySelector('select[name="aula"]').value;

  const datos = { nombre, tutor, telefono, aula };

  // Guardar en localStorage
  let lista = JSON.parse(localStorage.getItem('listaAlumnos')) || [];
  lista.push(datos);
  localStorage.setItem('listaAlumnos', JSON.stringify(lista));


  // Redirigir a la página donde se mostrarán
  window.location.href = "../listagnral-aulas/listagnral.html";
}




// document.querySelector('.Botones').addEventListener('click', function (e) {
//   e.preventDefault();

//   const nombre = document.querySelector('input[name="nombre"]').value;
//   const tutor = document.querySelector('input[name="nombretutor"]').value;
//   const telefono = document.querySelector('input[name="telefono"]').value;
//   const aula = document.querySelector('select[name="aula"]').value;

//   const datos = {
//     nombre,
//     tutor,
//     telefono,
//     aula
//   };

//   const qrData = JSON.stringify(datos);

//   // Mostrar datos en el modal
//   const info = `
//     <strong>Nombre:</strong> ${nombre}<br>
//     <strong>Tutor:</strong> ${tutor}<br>
//     <strong>Teléfono:</strong> ${telefono}<br>
//     <strong>Aula:</strong> ${aula}<br>
//   `;
//   document.getElementById('info-alumno').innerHTML = info;

//   // Generar QR en el modal
//   const qrContenedor = document.getElementById('qr-imprimir');
//   qrContenedor.innerHTML = '';
//   new QRCode(qrContenedor, {
//     text: qrData,
//     width: 180,
//     height: 180,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.H
//   });

//   // Mostrar el modal
//   document.getElementById('modal-imprimir').style.display = 'flex';
// });

// // Función para cerrar el modal
// function cerrarModal() {
//   document.getElementById('modal-imprimir').style.display = 'none';
// }
