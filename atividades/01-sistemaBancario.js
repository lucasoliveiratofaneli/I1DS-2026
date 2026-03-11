/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

let nome = "Tibúrcio";
let banco = "TaDuroBank";
let agencia = 123;
let conta = "96429-4";
let saldo = 10000;
let x1 = 500;
let x2 = 1000;
let x3 = 2000;
let x4 = 200;
let x5 = 12000;

console.log("--------------", banco, "--------------");
console.log("Imprimindo dados...");
console.log("Nome:", nome);
console.log("Agência:", agencia);
console.log("Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("---------------------------------------");

console.log("Pix Transferido R$",x1, "dia 07/09/26, Novo saldo R$", saldo -= x1);
console.log("Pix Transferido R$", x2, "dia 09/09/26, Novo saldo R$", saldo -= x2);
console.log("Pix Transferido R$", x3, "dia 015/09/26, Novo saldo R$", saldo -= x3);
console.log("Pix Recebido R$", x4, "dia 20/09/26, Novo saldo R$", saldo += x4);
console.log("Pix Recebido R$", x5, "dia 28/09/26, Novo saldo R$", saldo += x5);


console.log("--------------", banco, "--------------");
console.log("Imprimindo dados...");
console.log("Nome:", nome);
console.log("Agência:", agencia);
console.log("Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("---------------------------------------");