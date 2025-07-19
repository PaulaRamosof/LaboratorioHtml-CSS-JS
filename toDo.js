let contador = 0;
const counterDiv = document.getElementById("counter");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const titulo = document.getElementById("titulo");
titulo.textContent = "¡Contador interactivo de Paula 😎!";

function actualizarContador() {
  counterDiv.textContent = contador;

  if (contador >= 10) {
    counterDiv.style.color = "green";
  } else {
    counterDiv.style.color = "white";
  }
}

btnIncrease.addEventListener("click", () => {
  contador++;
  actualizarContador();
});

btnDecrease.addEventListener("click", () => {
  contador--;
  actualizarContador();
});

// Inicializar vista
actualizarContador();