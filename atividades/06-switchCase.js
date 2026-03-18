/* 
            🧠 Desafio: Descobrindo o Trimestre


Você deverá criar um programa em JavaScript que identifique em qual trimestre do ano um determinado mês está.


📌 Regras do desafio
O programa deve receber um número de 1 a 12 representando o mês.
Utilize a estrutura switch case para resolver.
Exiba no console em qual trimestre o mês informado se encontra:


Mês                     Trimestre
1, 2, 3                 Primeiro trimestre
4, 5, 6                 Segundo trimestre
7, 8, 9                 Terceiro trimestre
10, 11, 12              Quarto trimestre
*/

let mesSelecionado = "18";
switch (mesSelecionado) {
    case "1":
        console.log("Janeiro está no 1ª Trimestre!");
        break;
    case "2":
        console.log("Fevereiro está no 1ª Trimestre!");
        break;
    case "3":
        console.log("Março está no 1ª Trimestre!'");
        break;
    case "4":
        console.log("Abril está no 2ª Trimestre!'");
        break;
    case "5":
        console.log("Maio está no 2ª Trimestre!'");
        break;
    case "6":
        console.log("Junho está no 2ª Trimestre!'");
        break;
    case "7":
        console.log("Julho está no 3ª Trimestre!'");
        break;
    case "8":
        console.log("Agosto está no 3ª Trimestre!'");
        break;
    case "9":
        console.log("Setembro está no 3ª Trimestre!'");
        break;
    case "10":
        console.log("Outubro está no 4ª Trimestre!'");
        break;
    case "11":
        console.log("Novembro está no 4ª Trimestre!'");
        break;
    case "12":
        console.log("Dezembro está no 4ª Trimestre!'");
        break;

    default:
        console.log("Este Mês não existe!")
        break;
}

// Jeito Gustavo Castello de se fazer👌
let mes = 11;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
    
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;

  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;

  default:
    console.log("Mês incorreto!");
    break;
}