// Exemplo básico: Somar números
let numeros = [1, 2, 3, 4, 5];

let somaNumeros = numeros.reduce((acumalador, valorAtual) => {
    return acumalador + valorAtual;
}, 0);

console.log(somaNumeros);

// Exemplo: Multiplicação de números
let multiplicacaoNumeros = numeros.reduce((acumalador, valorAtual) => {
    return acumalador * valorAtual;
}, 1);

console.log(multiplicacaoNumeros);

// Exemplo: Encontrar o valor máximo em um array
let valorMaximo = numeros.reduce((acumalador, valorAtual) => {
    return Math.max(acumalador, valorAtual);
});

console.log(valorMaximo);

// Exemplo: Agrupar objetos por propriedade
let pessoas = [
    { nome: 'Laura', idade: 19 },
    { nome: 'Carlos', idade: 19 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Sabrina', idade: 17}
];

let agruporPorIdade = pessoas.reduce((acumalador, pessoa) => {
    let chave = pessoa.idade;

    if(!acumalador[chave]) {
        acumalador[chave] = [];
    }

    acumalador[chave].push(pessoa);
    return acumalador;
}, {});

console.log(agruporPorIdade);

// Exemplo: Contagem de ocorrências
let frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

let contagem = frutas.reduce((acumalador, fruta) => {
    if(!acumalador[fruta]){
        acumalador[fruta] = 1;
    } else {
        acumalador[fruta]++;
    }
    return acumalador;
}, {});

console.log(contagem);

// Exemplo: Somar valores de propriedades de objetos
let carrinho = [
    { produto: 'Camiseta', preco: 19.99 },
    { produto: 'Calça', preco: 39.99 },
    { produto: 'Tênis', preco: 49.99 }
];

let total = carrinho.reduce((acumalador, item) => {
    return acumalador + item.preco;
}, 0);

console.log(total);