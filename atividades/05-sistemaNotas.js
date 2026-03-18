//Outra Maneira de Fazer mais facil abaixo (Prof Castello)

function verificarSituacao(nota) {
  if (nota < 5) {
    return "Reprovado";
  } else if (nota < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(verificarSituacao(5));
console.log(verificarSituacao(7));

// Parte 02 - solução + parte extra

function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(situacaoFinal(7, 8, 6, 5));
console.log(situacaoFinal(7, 8, 6, 10));

console.log("------------------------------------------");
console.log("                 Solução 03");
console.log("------------------------------------------");

function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "Reprovado";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado";

  return "Media:" + media + " - Situação:" + situacao;
}

console.log(situacaoFinal(7, 8, 6, 5));
