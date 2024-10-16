// Exemplo simples
let frutas = ['maçã', 'banana'];
let maisFrutas = ['laranja', 'uva'];

let feira = frutas.concat(maisFrutas); // Juntando frutas e maisFrutas na feira
console.log(feira);

// Concatenando mais de dois arrays
let frutas1 = ['maçã', 'banana'];
let frutas2 = ['laranja', 'uva'];
let frutas3 = ['abacaxi', 'morango'];

let feiraMaior = frutas1.concat(frutas2, frutas3);
console.log(feiraMaior);

// Concatenando valores individuais
let nomes = ['Laura', 'Miryam'];
let adicionandoNomes = nomes.concat('Aldenir', 'Luiza', 'Fernando', 'Lucas');
console.log(adicionandoNomes);

// Não altera os array originais
console.log(frutas);
console.log(frutas1);
console.log(frutas2);
console.log(frutas3);
console.log(nomes);