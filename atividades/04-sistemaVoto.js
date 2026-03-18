/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));


/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/




function notasAlunos(nota) {
  let frase;
  if (nota < 5) {
    frase = "Você está reprovado!";
  } else if (nota >= 5 && nota <= 6.9) {
    frase = "Você está de recuperação";
  } if (nota >= 7 && nota <= 10){
    frase = "Você está acima da Média,Parabéns";
  }
  return frase;
}
let nota = 10;
console.log("Nota:", nota, "-", notasAlunos(nota));
nota = 4.1;
console.log("Nota:", nota, "-", notasAlunos(nota));
nota = 6;
console.log("Nota:", nota, "-", notasAlunos(nota));
nota = 1100;
console.log("Nota:", nota, "-", notasAlunos(nota));