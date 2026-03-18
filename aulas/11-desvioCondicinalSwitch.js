// Switch Case -> estrutura de decisão usada quando queremos comparar o valor de 
// uma variável com vários possíveis resultados.
// REGRA DO PROFCASTELLO - se tiver mais que 3 comparadores, faça um switch Case

// Exemplo 01 - MENU
// Neste exemplo a variável menuSelecionado guardará o nome de uma opção de menu.
// O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "Pague um Café";
switch (menuSelecionado) {
    case "Home":
        console.log("Você clicou no link 'Home'");
        break;
    case "Quem somos":
        console.log("Você clicou em 'Quem somos'");
        break;
    case "Contato":
        console.log("Você clicou em 'Contato'");
        break;
    case "Redes sociais":
        console.log("Você clicou em 'Redes sociais'");
        break;
    case "Pague um Café":
        console.log("Você clicou em 'Pague um Café'");
        break;

    default:
        console.log("Opção incorreta, selecione uma opção no menu")
        break;
}


const pi = 3.1415683

console.log(pi);
console.log(pi.toFixed(2)); // coloca numeros com 2 casas decimais somente