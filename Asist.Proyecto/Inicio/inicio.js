// Redirecciones a las aulas

function direAula1y2(){
   window.location.href = "../listagnral-aulas/listagnral-aula1-2.html"; 
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