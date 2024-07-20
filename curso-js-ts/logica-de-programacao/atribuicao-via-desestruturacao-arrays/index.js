const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // Resto, pega o resto que não foi declarado
const [,, terceiroNumero,, quintoNumero] = numeros; // Cada vírgula, você pula para o próximo índice

//                    0          1          2
//                 0  1  2    0  2  1    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
