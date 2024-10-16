// Exemplo básico: Filtrando números maiores que 10

let numeros = [5, 12, 8, 130, 44];

let maioresQueDez = numeros.filter(function(numero) {
  return numero > 10;
});

console.log(maioresQueDez); // [12, 130, 44]

// Exemplo: Filtrando strings em um array usando arrow Function
let palavras = ['maçã', 'banana', 'uva', 'abacaxi', 'laranja'];

let palavrasLongas = palavras.filter(palavra => palavra.length > 6);

console.log(palavrasLongas); // ['abacaxi', 'laranja']

// Exemplo: Filtrando objetos em um array
let usuarios = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Isa', idade: 47},
];

let nomeCincoLetrasOuMais = usuarios.filter(elemento => elemento.nome.length >= 5);

console.log(nomeCincoLetrasOuMais);

let pessoasMaisCinquentaAnos = usuarios.filter(elemento => elemento.idade > 50);
console.log(pessoasMaisCinquentaAnos);

let nomeTerminaEmA = usuarios.filter(elemento => elemento.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaEmA);

