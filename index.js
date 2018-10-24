const result = document.querySelector(".results");

let firstNumber = "";
let secondNumber = "";
let operator = "";

const container = document.querySelector(".valor");
container.addEventListener("click", onClick);

function onClick(evento) {
  const cliquear = evento.target.innerText;
  console.log(`Clickado el ${cliquear}`);
  result.innerText = cliquear;

  switch (cliquear) {
    case "C":
      eliminar();
      break;

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      añadirNumero(cliquear);
      break;

    case "÷":
    case "×":
    case "−":
    case "+":
      gestionaOperator(cliquear);
      break;

    case "←":
      borrar(cliquear);
      break;
    case "=":
      switch (cliquear) {
        case "÷":
          secondNumber = firstNumber;
          firstNumber = "";
          break;
      }
      break;
  }
}

function eliminar() {
  result.innerText = 0;
}

function añadirNumero(value) {
  if (operator === "") {
    firstNumber = firstNumber + value;
    result.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + value;
    result.innerText = secondNumber;
  }
}
function borrar(value) {
  firstNumber = firstNumber.slice(0, -1);

  if (firstNumber === "") {
    result.innerText = "0";
  } else {
    result.innerText = firstNumber;
  }
}
function gestionaOperator(value) {
  operator = value;
}
const resultado = parseInt(firstNumber) + parseInt(secondNumber);
result.innerText = String(resultado);
