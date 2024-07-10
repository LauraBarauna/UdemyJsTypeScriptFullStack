//               01234567
let umaString = "Um texto";

console.log(umaString[4]);// Pega a letra que está no indice 4 da Sring
console.log(umaString.charAt(6)); // Pega a letra que está no indice 6 da Sring
console.log(umaString.indexOf('texto')); // Diz em qual índice a palavra texto começa
console.log(umaString.lastIndexOf('textoo')); // Igual o de cima, porém começa de trás pra frente
console.log(umaString.replace('Um', 'Outro')); // Troca as palavras
console.log(umaString.length); // Diz o tamanho da Sring

umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.slice(2, 6)) // Fatia o texto conforme o índice


