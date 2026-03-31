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
let numero10a50 = 50;

if (numero10a50 >= 10 && numero10a50 <= 50) {
  console.log(numero10a50, "está entre 10 e 50");
} else {
  console.log(numero10a50, "está fora");
}

console.log(
  "--------------------------Atividade17--------------------------------",
);
// 17. Crie um sistema de login simples (usuário e senha).
const log = "toptop";
const sen = 676767;

let logUser = "toptop";
let senUser = 676767;

if (logUser == log && senUser == sen) {
  console.log("Login efetuado com sucesso!");
}

console.log(
  "--------------------------Atividade18--------------------------------",
);
//18. Verifique o maior entre dois números.
let nume1 = 10;
let nume2 = 10;

if (nume1 > nume2) {
  console.log("O maior número é:", nume1);
} else if (nume2 > nume1) {
  console.log("O maior número é:", nume2);
} else {
  console.log("Os números são iguais");
}

console.log(
  "--------------------------Atividade19--------------------------------",
);
//19. Verifique o maior entre três números.
let numer1 = 4;
let numer2 = 5;
let numer3 = 10;

if (numer1 >= numer2 && numer1 >= num3) {
  console.log("O maior número é:", numer1);
} else if (numer2 >= numer2 && numer1 >= numer3) {
  console.log("O maior número é:", numer2);
} else {
  console.log("O maior número é:", numer3);
}

console.log(
  "--------------------------Atividade20--------------------------------",
);
//20. Classifique a idade: Criança, Adolescente, Adulto e Idoso
function classificarIdades(Idade) {
  if (Idade < 0) {
    return "Idade inválida";
  } else if (Idade <= 12) {
    return "Criança";
  } else if (Idade <= 16) {
    return "Adolescente";
  } else if (Idade <= 60) {
    return "Adulto";
  } else if (Idade <= 110) {
    return "Idoso";
  }
}

console.log(classificarIdades(16));

console.log(
  "--------------------------Atividade21--------------------------------",
);
//21. Dado um número de 1 a 7, exiba o dia da semana.

let dia = 7;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
}

console.log(
  "--------------------------Atividade22--------------------------------",
);
//22. Dado um mês (1 a 12), exiba o nome do mês.

let mes = 7;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
}

console.log(
  "--------------------------Atividade23--------------------------------",
);
//23. Dado um mês, informe o trimestre.

let Mes = 11;
switch (Mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre");
    break;
  default:
}

console.log(
  "--------------------------Atividade24--------------------------------",
);
// 24. Crie um menu simples:1: Somar, 2: Subtrair, 3: Multiplicar, 4: Dividir
let opcao = 2;

let numero1 = 10;
let numero2 = 5;

switch (opcao) {
  case 1:
    console.log("Soma:", numero1 + numero2);
    break;

  case 2:
    console.log("Subtração:", numero1 - numero2);
    break;

  case 3:
    console.log("Multiplicação:", numero1 * numero2);
    break;

  case 4:
    console.log("Divisão:", numero1 / numero2);
    break;

  default:
    console.log("Opção inválida");
}

console.log(
  "--------------------------Atividade25--------------------------------",
);
//25. Sistema de avaliação:A → Excelente, B → Bom, C → Regular, D → Ruim
let notas = "A";

switch (notas) {
  case "A":
    console.log("Excelente");
    break;

  case "B":
    console.log("Bom");
    break;

  case "C":
    console.log("Regular");
    break;

  case "D":
    console.log("Ruim");
    break;

  default:
    console.log("Nota inválida");
}

console.log(
  "--------------------------Atividade26--------------------------------",
);
//26. Exiba números de 1 a 100.

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log(
  "--------------------------Atividade27--------------------------------",
);
//27. Exiba números de 100 até 1.

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

console.log(
  "--------------------------Atividade28--------------------------------",
);
//28. Exiba apenas números pares de 1 a 50.

for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

console.log(
  "--------------------------Atividade29--------------------------------",
);
// 29. Exiba apenas números ímpares de 1 a 50.

for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

console.log(
  "--------------------------Atividade30--------------------------------",
);
//30. Calcule a soma de 1 até 100.

let mais = 0;

for (let i = 1; i <= 100; i++) {
  mais += i; 
}

console.log("Soma total:", mais);

console.log(
  "--------------------------Atividade31--------------------------------",
);
//31. Calcule o fatorial de um número.

function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

let Numero = 5;
console.log("Fatorial:", fatorial(numero));

console.log(
  "--------------------------Atividade32--------------------------------",
);
// 32. Exiba a tabuada de um número.

function fatorial(n) {
  if (n < 0) {
    return "Número inválido";
  }

  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log(fatorial(5));

console.log(
  "--------------------------Atividade33--------------------------------",
);
//33. Conte quantos números pares existem entre 1 e 100.

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

console.log("Entre o 1 ao 100 tem 50 números pares.");

console.log(
  "--------------------------Atividade34--------------------------------",
);
//34. Exiba todos os múltiplos de 5 entre 0 e 100.

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

console.log(
  "--------------------------Atividade35--------------------------------",
);
//35. Crie um programa que desenhe no console:*, **, ***, ****, *****
for (let i = 1; i <= 5; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += "*";
  }
  console.log(linha);
}

console.log(
  "--------------------------Atividade36--------------------------------",
);
//36. Crie um vetor com 10 números e exiba todos.
const numeros = [5, 6, 8, 9, 10, 11, 3, 21, 13, 21];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log(
  "--------------------------Atividade37--------------------------------",
);
//37. Calcule a soma dos elementos do vetor.
var numerosVetor = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let somaVetor = 0;

for (let i = 0; i < numerosVetor.length; i++) {
  somaVetor += numerosVetor[i];
}

console.log(somaVetor);

console.log(
  "--------------------------Atividade38--------------------------------",
);
// 38. Calcule a média do vetor.
const VetorMedia = [12, 45, 78, 34, 89, 23, 56, 91, 10, 67];

const somaVetor1 = VetorMedia.reduce((total, atual) => total + atual, 0);
const mediaVetor = somaVetor1 / VetorMedia.length;

console.log(mediaVetor);

console.log(
  "--------------------------Atividade39--------------------------------",
);
//39. Encontre o maior valor do vetor.

const VetorMedia1 = [12, 45, 78, 2, 90, 33, 56, 8, 100, 21];

const maiorValor = Math.max(...VetorMedia1);

console.log(maiorValor);

console.log(
  "--------------------------Atividade40--------------------------------",
);
//40. Encontre o menor valor do vetor.

const VetorMedia2 = [10, 20, 30, 45, 5.5, 60, 77, 88, 90, 100];

const menorValor = Math.min(...VetorMedia2);

console.log(menorValor);

console.log(
  "--------------------------Atividade41--------------------------------",
);
//41. Conte quantos números são pares e ímpares.

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros5.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Quantidade de números pares:", pares);
console.log("Quantidade de números ímpares:", impares);

console.log(
  "--------------------------Atividade42--------------------------------",
);
//42. Multiplique todos os elementos por 2.
let vetor = [1, 2, 3, 4, 5];
let resultado = [];

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] !== undefined) {
    resultado[i] = vetor[i] * 2;
  }
}

console.table(resultado);

console.log(
  "--------------------------Atividade43--------------------------------",
);
//43. Crie uma matriz 3x3 e exiba todos os valores.
let matriz = [
  [7, 6, 5],
  [8, 4, 6],
  [2, 9, 1],
];
console.table(matriz);

console.log(
  "--------------------------Atividade44--------------------------------",
);
//44. Exiba a diagonal principal de uma matriz.
let matris = [
  [7, 6, 5],
  [8, 4, 6],
  [2, 9, 1],
];

console.log("A diagonal da matriz é:");
for (let i = 0; i < matris.length; i++) {
  console.log(matris[i][i]);
}

console.log(
  "--------------------------Atividade45--------------------------------",
);
//45. Exiba a diagonal secundária.
let matriz7 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let tamanho = matriz7.length;

for (let i = 0; i < tamanho; i++) {
  for (let j = 0; j < tamanho; j++) {
    if (i + j === tamanho - 1) {
      console.log(matriz7[i][j]);
    }
  }
}

console.log(
  "--------------------------Atividade46--------------------------------",
);
//46. Some todos os elementos da matriz.

const MAtriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let somar = 0;

for (let i = 0; i < MAtriz.length; i++) {
  for (let j = 0; j < MAtriz[i].length; j++) {
    soma += MAtriz[i][j];
  }
}

console.log("Soma total:", soma);

console.log(
  "--------------------------Atividade47--------------------------------",
);
//47. Encontre o maior valor da matriz.
const MaTriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let MAior = MaTriz[0][0];

for (let i = 0; i < MaTriz.length; i++) {
  for (let j = 0; j < MaTriz[i].length; j++) {
    if (MaTriz[i][j] > MAior) {
      MAior = MaTriz[i][j];
    }
  }
}

console.log(
  "--------------------------Atividade48--------------------------------",
);
//48. Multiplique todos os valores por um número X.

let matriZ = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let x2 = 2;

console.log("MatriZ original:");
for (let i = 0; i < 3; i++) {
  console.log(matriZ[i]);
}

// Multiplicar os valores
for (let linha = 0; linha < 3; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    matriZ[linha][coluna] = matriZ[linha][coluna] * x2;
  }
}

// Mostrar matriz depois
console.log("MatriZ depois da multiplicação:");
for (let linha = 0; linha < 3; linha++) {
  console.log(matriZ[linha]);
}

console.log(
  "--------------------------Atividade49--------------------------------",
);
//49. Conte quantos valores são maiores que 10.
let maTriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let contador = 0;

for (let i = 0; i < maTriz.length; i++) {
  for (let j = 0; j < maTriz.length; j++) {
    if (matriz[i][j] > 10) {
      contador++;
    }
  }
}

console.log(contador);

console.log(
  "--------------------------Atividade50--------------------------------",
);
/*50. Crie uma matriz e exiba no formato:
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]*/
let Matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(Matriz);
