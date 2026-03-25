console.log(
  "--------------------------1Atividade--------------------------------",
);
// 1. Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
var nome = "Lucas";
var idade = "15";
var cidade = "Bauru";
console.log("Olá meu nome é", nome, "tenho", idade, "anos e moro em", cidade);

console.log(
  "--------------------------2Atividade--------------------------------",
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
  "--------------------------3Atividade--------------------------------",
);
// 3. Calcule a área de um retângulo.
let base = 10;
let altura = 5;
let area = base * altura;
console.log("A área deste retangulo é", area);
console.log(
  "--------------------------4Atividade--------------------------------",
);
// 4. Calcule o volume de um paralelepípedo.
let comprimento = 8;
let volume = base * altura * comprimento;
console.log("O volume deste paralelepípedo é", volume);
console.log(
  "--------------------------5Atividade--------------------------------",
);
// 5. Dado o valor de um produto, calcule: 10% de desconto | valor final
let valor = 100;
let desconto = 20 / 100;
console.log(
  "O cliente irá pagar R$",
  valor - valor * desconto,
  "já com desconto",
);
console.log(
  "--------------------------6Atividade--------------------------------",
);
// 6. Converta temperatura de Celsius para Fahrenheit.
let celsius = 20;
let fahrenheit = celsius * 1.8 + 32;
console.log(celsius, "°C equivalem a", fahrenheit, "°F");
console.log(
  "--------------------------7Atividade--------------------------------",
);
// 7. Calcule o IMC e exiba o valor.
let peso = 62;
let alturaPessoa = 1.82;
let imc = peso / (alturaPessoa * alturaPessoa);
console.log("Seu IMC é", imc.toFixed(2));
console.log(
  "--------------------------8Atividade--------------------------------",
);
// 8. Calcule a média de 3 notas.
let n1 = 7;
let n2 = 8;
let n3 = 6;
let media = (n1 + n2 + n3) / 3;
console.log("A média é", media);
console.log(
  "--------------------------9Atividade--------------------------------",
);
// 9. Calcule o delta de uma equação de 2º grau.
let a = 1;
let b = -5;
let c = 3;
let delta = b * b - 4 * a * c;
console.log("O Delta desta equeção de 2° grau vale:", delta);
console.log(
  "--------------------------10Atividade--------------------------------",
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
  "--------------------------11Atividade--------------------------------",
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
  "--------------------------12Atividade--------------------------------",
);
// 12. Verifique se um número é par ou ímpar.
if (num % 2 == 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
