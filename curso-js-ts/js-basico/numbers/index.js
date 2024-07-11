// Aprendendo mais sobre numbers

// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0


console.log(num1.toString()+num2); // Muda para string, porém so nessa linha
console.log(typeof num1);
num1 = num1.toString(); // Muda o número para String

console.log(num1.toString(2)); // Mostra o número em código binário
console.log(num1.toFixed(2)); // Deixa o número com duas casas depois da virgula
console.log(Number.isInteger(num1)); // Verifica se o número é inteiro
