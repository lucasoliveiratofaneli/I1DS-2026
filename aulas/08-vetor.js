// Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Brontossauro"];

// Imprimindo os dados em forma de linha
console.log(dinos);
// Imprimindo os dados em forma de tabelas
console.table(dinos);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", dinos.length, "elementos");

// Imprimir Elemento a partir do indice
console.log(dinos[2]);

// push -> Adiciona um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table("dinos");
console.log("O Vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no início da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// Obter um Elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição (não existe)", dinos[20]);

// pop -> Remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// shift -> Remover um elemento do início do vetor(primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indice.
dinos.splice(1, 1); // Remove somente o segundo item da lista
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// Adicionar mais elemento ao vetor
dinos.push("Pterodactílo");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

// Procurar um elemento a partir do nome (descrição)
// indexOF (procurando) -> retorna o índice do elemento do vetor
let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// indexOf(procurado) -> retorna -1 caso não encontre o elemento 
procurado = "Tofussauro";
indice = dinos.indexOf(procurado)
console.log("O ", procurado, "está no indice:", indice);

// Excluir um elemento com base e seu nome 
// 1ª localizar o indice do elemento a partir do nome
// 2ª excluir o registro com base no indice retorna 

procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do Indice
dinos[1] = "Anquilossauro";
console.table(dinos);
