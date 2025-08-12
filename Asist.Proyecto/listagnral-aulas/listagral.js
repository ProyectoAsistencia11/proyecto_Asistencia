// 🔍 Detectar el aula desde el nombre del archivo
const ruta = window.location.pathname;
const aulaDetectada = ruta.match(/aula(\d+-\d+|delaCalma)/);

if (aulaDetectada) {
  const aula = aulaDetectada[1].replace('delaCalma', 'calma');
  mostrarAlumnosAula(aula);
}

// // 📋 Mostrar alumnos del aula correspondiente
// function mostrarAlumnosAula(aula) {
//   // Generar la clave del aula
//   const clave = `listaAlumnos_${aula.replace('-', '_').replace(' ', '')}`;

//   // Obtener la lista desde localStorage
//   const lista = JSON.parse(localStorage.getItem(clave)) || [];

//   // Seleccionar el contenedor donde se mostrarán los alumnos
//   const contenedor = document.getElementById("lista-alumnos");

//   // Limpiar el contenido anterior
//   contenedor.innerHTML = "";

//   // Recorrer la lista y mostrar cada alumno
//   lista.forEach((alumno, index) => {
//     const item = document.createElement("div");
//     item.classList.add("alumno-item");
//     item.innerHTML = `
//       <p><strong>Nombre:</strong> ${alumno.nombre}</p>
//       <p><strong>Tutor:</strong> ${alumno.tutor}</p>
//       <p><strong>Teléfono:</strong> ${alumno.telefono}</p>
//       <hr>
//     `;
//     contenedor.appendChild(item);
//   });
// }
function mostrarAlumnosAula(aula) {
  const clave = `listaAlumnos_${aula.replace('-', '_').replace(' ', '')}`;
  const lista = JSON.parse(localStorage.getItem(clave)) || [];
  const cuerpoTabla = document.querySelector("#tabla-alumnos tbody");

  cuerpoTabla.innerHTML = ""; // Limpiar tabla

  lista.forEach((alumno, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${alumno.nombre}</td>
      <td>${alumno.tutor}</td>
      <td>${alumno.telefono}</td>
      <td><button onclick="borrarAlumno('${clave}', ${index})">🗑️ Borrar</button></td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}


function borrarAlumno(clave, index) {
  let lista = JSON.parse(localStorage.getItem(clave)) || [];
  lista.splice(index, 1);
  localStorage.setItem(clave, JSON.stringify(lista));
  location.reload(); // Recargar para actualizar la tabla
}
