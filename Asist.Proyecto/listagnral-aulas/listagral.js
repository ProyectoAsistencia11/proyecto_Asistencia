const lista = JSON.parse(localStorage.getItem('listaAlumnos')) || [];
lista.forEach(datos => {
  const fila = document.createElement('div');
  fila.innerHTML = `
    <div>${datos.nombre}</div>
    <div>${datos.tutor}</div>
    <div>${datos.telefono}</div>
    <div>${datos.aula}</div>
  `;
  document.querySelector('.lista').appendChild(fila);
});
