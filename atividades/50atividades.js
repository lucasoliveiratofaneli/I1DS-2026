console.log(
  "--------------------------Atividade1--------------------------------",
);
// 1. Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
var nome = "Lucas";
var idade = "15";
var cidade = "Bauru";
console.log("Olá meu nome é", nome, "tenho", idade, "anos e moro em", cidade);

console.log(
  "--------------------------Atividade2--------------------------------",
);
// 2. Crie duas variáveis numéricas e exiba:soma, subtração, multiplicação, divisão e resto da divisão.
let x = 10;
let y = 5;
let soma = x + y;
console.log("A soma de x + y é", soma);

let subtracao = x - y;
console.log("A subtração de x - y é", subtracao);

let multiplicacao = x * y;
console.log("A multiplicação de x * y é", multiplicacao);

let divisao = x / y;
console.log("A divisão de x / y é", divisao);

let resto = x % y;
console.log("O resto da divisão de x % y é", resto);

console.log(
  "--------------------------Atividade3--------------------------------",
);
// 3. Calcule a área de um retângulo.
let base = 10;
let altura = 5;
let area = base * altura;
console.log("A área deste retangulo é", area);

console.log(
  "--------------------------Atividade4--------------------------------",
);
// 4. Calcule o volume de um paralelepípedo.
let comprimento = 8;
let volume = base * altura * comprimento;
console.log("O volume deste paralelepípedo é", volume);

console.log(
  "--------------------------Atividade5--------------------------------",
);
// 5. Dado o valor de um produto, calcule: 10% de desconto | valor final
let valor = 100;
let desconto = 10 / 100;
console.log(
  "O cliente irá pagar R$",
  valor - valor * desconto,
  "já com desconto",
);

console.log(
  "--------------------------Atividade6--------------------------------",
);
// 6. Converta temperatura de Celsius para Fahrenheit.
let celsius = 20;
let fahrenheit = celsius * 1.8 + 32;
console.log(celsius, "°C equivalem a", fahrenheit, "°F");

console.log(
  "--------------------------Atividade7--------------------------------",
);
// 7. Calcule o IMC e exiba o valor.
let peso = 62;
let alturaPessoa = 1.82;
let imc = peso / (alturaPessoa * alturaPessoa);
console.log("Seu IMC é", imc.toFixed(2));

console.log(
  "--------------------------Atividade8--------------------------------",
);
// 8. Calcule a média de 3 notas.
let n1 = 7;
let n2 = 8;
let n3 = 6;
let media = (n1 + n2 + n3) / 3;
console.log("A média é", media);

console.log(
  "--------------------------Atividade9--------------------------------",
);
// 9. Calcule o delta de uma equação de 2º grau.
let a = 1;
let b = -5;
let c = 3;
let delta = b * b - 4 * a * c;
console.log("O Delta desta equeção de 2° grau vale:", delta);

console.log(
  "--------------------------Atividade10--------------------------------",
);
// 10. Dado um valor em horas, converta para minutos e segundos.
let horas = 5;
let minutos = 5 * 60;
let segundos = minutos * 60;
console.log(
  horas,
  "horas são",
  minutos,
  "minutos e",
  minutos,
  "minutos são",
  segundos,
  "segundos",
);

console.log(
  "--------------------------Atividade11--------------------------------",
);
// 11. Verifique se um número é positivo, negativo ou zero.
let num = 8;
if (num > 0) {
  console.log("Positivo");
} else if (num < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

console.log(
  "--------------------------Atividade12--------------------------------",
);
// 12. Verifique se um número é par ou ímpar.
if (num % 2 == 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

console.log(
  "--------------------------Atividade13--------------------------------",
);
// 13. Dado um número, verifique se é múltiplo de 3.
let numero = 12;
if (numero % 3 === 0) {
  console.log(numero, "é múltiplo de 3");
} else {
  console.log(numero, "não é múltiplo de 3");
}

console.log(
  "--------------------------Atividade14--------------------------------",
);
// 14. Verifique se um aluno foi:Aprovado (≥ 7), Recuperação (≥ 5 e < 7), Reprovado (< 5)
let nota1 = 7;
let nota2 = 8;
let nota3 = 10;
let nota4 = 7;

let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

switch (true) {
  case mediaNotas < 5:
    console.log("Média: " + mediaNotas.toFixed(2));
    console.log("Situação: Reprovado");
    break;

  case mediaNotas < 7:
    console.log("Média: " + mediaNotas.toFixed(2));
    console.log("Situação: Recuperação");
    break;

  case mediaNotas >= 7:
    console.log("Média: " + mediaNotas.toFixed(2));
    console.log("Situação: Aprovado");
    break;

  default:
    console.log("Erro no cálculo");
    break;
}

console.log(
  "--------------------------Atividade15--------------------------------",
);
// 15. Verifique se uma pessoa pode votar (use regras reais).
function podeVotar(idadeVotar) {
  let frase;
  if (idadeVotar < 16) {
    frase = "Não pode Votar";
  } else if (idadeVotar >= 18 && idadeVotar <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
let idadeVotar = 1;
console.log("Idade:", idadeVotar, "-", podeVotar(idadeVotar));

console.log(
  "--------------------------Atividade16--------------------------------",
);
// 16. Verifique se um número está entre 10 e 50.
let numero10a50 = 51;

if (numero10a50 >= 10 && numero10a50 <= 50) {
    console.log(numero10a50, "está entre 10 e 50");
} else {
    console.log(numero10a50, "está fora");
}

console.log(
  "--------------------------Atividade17--------------------------------",
);
// 17. Crie um sistema de login simples (usuário e senha).
