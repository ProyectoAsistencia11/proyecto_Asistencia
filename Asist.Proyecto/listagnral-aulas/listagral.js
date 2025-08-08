const lista = JSON.parse(localStorage.getItem('listaAlumnos')) || [];
lista.forEach(datos => {
  const fila = document.createElement('div');
  fila.classList.add('fila-datos'); // 👈 Esto aplica el estilo de columnas
fila.innerHTML = `
  <div class="columna-nombre">${datos.nombre}</div>
  <div class="columna-tutor">${datos.tutor}</div>
  <div class="columna-telefono">${datos.telefono}</div>
  <div class="columna-aula">${datos.aula}</div>
  `;
  document.querySelector('.lista').appendChild(fila);
});
