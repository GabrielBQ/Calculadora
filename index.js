const result = document.querySelector(".results");

const container = document.querySelector(".valor");
container.addEventListener("click", onClick);
//PARA  QUE SEPARE LA PRIMERA Y LA SEGUNDA CIFRA AL PULSAR UN OPERADOR(PARA PODER HACER LAS FUNCIONES)
let firstNumber = "";
let secondNumber = "";
let operator = "";
//FUNCIÓN PARA RECONOCER LOS BOTONES AL PULSARLOS
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
//FUNCIÓN  DE RESETEO
function eliminar() {
  if (operator === "") {
    firstNumber = "";
  } else {
    secondNumber = "";
  }
  result.innerText = 0;
}
//FUNCIÓN PARA MANTENER SIGUIENTES NUMEROS EN PANTALLA
function añadirNumero(value) {
  if (operator === "") {
    firstNumber = firstNumber + value;
    result.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + value;
    result.innerText = secondNumber;
  }
}
//FUNCIÓN PARA RECONOCER LOS BOTONES OPERADORES
function gestionaOperator(value) {
  operator = value;
}
//FUNCIÓN DE FLECHA PARA ELIMINAR ULTIMAS CIFRAS(EXCEPTO LOS RESULTADOS)
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
//FUNCIÓN PARA REALIZAR OPERACIONES
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
