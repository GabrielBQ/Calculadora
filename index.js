const button = document.querySelector(".valor");
button.addEventListener("click", onClick);

function onClick(evento) {
  const cliquear = evento.target.innerText;
  result.innerText = cliquear;

  //result=casilla de resultados
  const result = document.querySelector(".results");
  //FUNCIÓN DEL BOTÓN C
  const buttonC = document.querySelector(".botonC");
  buttonC.addEventListener("click", eliminar);

  function eliminar(evento1) {
    const eliminado = erase(evento1.target.innerText);
    //Donde quiero que borre-->(en results)
    result.innerText = eliminado;
  }

  function erase(n) {
    return (n = 0);
  }
}
