// function olaMundo() {
//  alert("Olá Mundo!");
//}

/* Arrow function(forma moderna de JS) */
const olaMundo = () => {
  alert("Jesus te ama!");
};

const mudarTexto = () => {
  // Criar uma variavel para armazenar o elemento do documento

  let elementoAlvo = document.getElementById("texto");

  document.getElementById("texto").innerHTML = "🔥 Novo texto com JS";
  document.getElementById("texto").style.color = "red";
  document.getElementById("texto").style.backgroundColor = "yellow";
};

const enviarNome = () => {
  let nomeDigitado = document.getElementById("nome").value;

  alert("Olá " + nomeDigitado);

  //  let nomeDigitado = document.getElementsByName("nome").value
  //  alert("Olá " + nomeDigitado)
};

const somar = () => {

    event.preventDefault();

    // Buscou os elementos por ID
  let numero1 = parseInt(document.getElementById("n1").value);
  let numero2 = parseInt(document.getElementById("n2").value);

  // Realizou a soma dos valores
  let result = numero1 + numero2;

  //Devolveu o resultado para o formulario
  document.getElementById("resultado").innerHTML = result

  alert(result);
};
