// const ele = document.getElementById("ele1");

//   function pintar() {
//     ele.style.backgroundColor = 'yellow';
//   }

//   ele.addEventListener("click", pintar);


// // Otra forma de hacerlo anonimo


// const ele = document.getElementById("ele1");

// ele.addEventListener("click", function(event) {
//   event.target.style.backgroundColor = 'yellow';
// });


// Transformacion a funcion con argumento 

function pintar(event, color = 'green') {
  event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
const texto = document.getElementById("texto");

// Clic en el div: usa el color por defecto (green)
ele.addEventListener("click", function(event) {
  pintar(event);
});

// Clic en el párrafo: pasa "yellow" como argumento
texto.addEventListener("click", function(event) {
  pintar(event, 'yellow');
});