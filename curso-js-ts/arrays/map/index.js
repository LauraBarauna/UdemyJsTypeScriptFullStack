// Dobrando números

let numeros= [10,20,30,40];

let dobrados = numeros.map(elemento => elemento * 2);
console.log(dobrados);

// Modificando um array de objetos

let usuarios = [
    { nome: 'Laura', idade: 19 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Ana', idade: 25 }
  ];

let nomes = usuarios.map(function(elemento) {
    return elemento.nome;
})
console.log(nomes);

// Aplicar transformações mais complexas

let nomesComIndice = usuarios.map((elemento, indice) => `${indice + 1}: ${elemento.nome}`);
console.log(nomesComIndice);

let produtos = [
    { nome: 'Camiseta', preco: 19.99 },
    { nome: 'Calça', preco: 39.99 },
    { nome: 'Tênis', preco: 49.99 }
  ];

let produtosFormatado = produtos.map(elemento => `${elemento.nome} - ${elemento.preco}`);
console.log(produtosFormatado);