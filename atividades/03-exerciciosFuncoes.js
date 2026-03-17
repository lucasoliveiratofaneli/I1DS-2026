/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.


2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

console.log("-----------------------------------------------------------------------------------------------------")
function subtrair(valor1, valor2) {
  return (valor1 - valor2);
}

console.log("2026 - 1988 =", subtrair(2026, 1988));

function multiplicacao(v1, v2) {
  return v1 * v2
}

console.log("-----------------------------------------------------------------------------------------------------")
console.log("O Carro tem capacidade máxima de 65 Litros,", "O Carro consegue fazer", multiplicacao(65,12))
console.log("-----------------------------------------------------------------------------------------------------")