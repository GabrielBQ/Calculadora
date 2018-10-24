const result = document.querySelector(".results");

const container = document.querySelector(".valor");
container.addEventListener("click", onClick);

function onClick(evento) {
  const cliquear = evento.target.innerText;
  console.log(`Clickado el ${cliquear}`);

  switch (cliquear) {
    case "C":
      eliminar();
      break;
  }
}

function eliminar() {
  result.innerText = 0;
}
