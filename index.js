const result = document.querySelector(".results");

const container = document.querySelector(".valor");
container.addEventListener("click", onClick);

let firstNumber = "";
let secondNumber = "";
let operator = "";

function onClick(evento) {
  const cliquear = evento.target.innerText;
  console.log(`Clickado el ${cliquear}`);

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
      igual();
      break;
  }
}

function eliminar() {
  if (operator === "") {
    firstNumber = "";
  } else {
    secondNumber = "";
  }
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
function gestionaOperator(value) {
  operator = value;
}

function borrar(value) {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    if (firstNumber === "") {
      result.innerText = "0";
    } else {
      result.innerText = firstNumber;
    }
  } else {
    secondNumber = secondNumber.slice(0, -1);
    if (secondNumber === "") {
      result.innerText = "0";
    } else {
      result.innerText = secondNumber;
    }
  }
}

function igual() {
  let resultado;
  switch (operator) {
    case "÷":
      resultado = parseInt(firstNumber) / parseInt(secondNumber);
      result.innerText = String(resultado);
      break;

    case "×":
      resultado = parseInt(firstNumber) * parseInt(secondNumber);
      result.innerText = String(resultado);
      break;

    case "−":
      resultado = parseInt(firstNumber) - parseInt(secondNumber);
      result.innerText = String(resultado);
      break;

    case "+":
      resultado = parseInt(firstNumber) + parseInt(secondNumber);
      result.innerText = String(resultado);
      break;
  }
  firstNumber = resultado;
  operator = "";
  secondNumber = "";
}
