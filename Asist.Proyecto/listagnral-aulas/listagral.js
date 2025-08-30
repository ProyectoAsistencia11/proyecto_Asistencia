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
  // ✅ Actualizar el total una sola vez
  localStorage.setItem(`total-${aula}`, lista.length); 
}

function borrarAlumno(clave, index) {
  let lista = JSON.parse(localStorage.getItem(clave)) || [];
  lista.splice(index, 1);
  localStorage.setItem(clave, JSON.stringify(lista));
  location.reload(); // Recargar la página para actualizar la lista
}


function filtrarAlumnos() {
  const normalizar = texto => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const input = normalizar(document.getElementById("busqueda").value);
  const filas = document.querySelectorAll("#tabla-alumnos tbody tr");
  const mensaje = document.getElementById("mensaje-vacio");
  const sugerencias = document.getElementById("sugerencias");

  let coincidencias = 0;
  let nombres = [];

  filas.forEach(fila => {
    const nombre = fila.cells[0]?.textContent || ""; // Nombre en primera celda
    const nombreNormalizado = normalizar(nombre);

    // Mostrar u ocultar fila según coincidencia parcial
    if (nombreNormalizado.includes(input)) {
      fila.style.display = "";
      coincidencias++;
      if (input && nombreNormalizado.startsWith(input)) {
        nombres.push(nombre);
      }
    } else {
      fila.style.display = "none";
    }
  });

  mensaje.style.display = coincidencias === 0 ? "block" : "none";

 // 🧹 Limpiar el campo de búsqueda
  document.getElementById("busqueda").value = "";



  // Mostrar sugerencias de nombres que empiezan con lo escrito
  sugerencias.innerHTML = "";
  if (input && nombres.length > 0) {
    [...new Set(nombres)].forEach(nombre => {
      const li = document.createElement("li");
      li.textContent = nombre;
      li.style.cursor = "pointer";
      li.style.padding = "4px";
      li.style.borderBottom = "1px solid #ccc";
      li.onclick = () => {
        document.getElementById("busqueda").value = nombre;
        filtrarAlumnos();
        sugerencias.innerHTML = "";
      };
      sugerencias.appendChild(li);
    });
  }
}

  document.getElementById("busqueda").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que se envíe un formulario si lo hay
    filtrarAlumnos(); // Llama a tu función de búsqueda
  }
});

const aulas = ['aula1-2', 'aula3-4', 'aula5-6', 'aula7-8' , 'aula9-12', 'auladelacalma']; // Agregá todas las aulas que tengas

document.addEventListener('DOMContentLoaded', () => {
  aulas.forEach(aulaId => {
    mostrarTotalPorAula(aulaId);
  });
});

function mostrarTotalPorAula(aulaId) {
  const clave = `listaAlumnos_${aulaId.replace('-', '_').replace(' ', '')}`;
  const lista = JSON.parse(localStorage.getItem(clave)) || [];
  const total = lista.length;

  const totalElemento = document.getElementById(`total-${aulaId}`);
  if (totalElemento) {
    totalElemento.textContent = total;
  }
}





