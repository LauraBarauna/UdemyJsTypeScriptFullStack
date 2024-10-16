// Removendo elementos com splice()
let frutas = ['maçã', 'banana', 'laranja', 'uva'];
frutas.splice(1,2); // Remove banana e laranja
console.log(frutas);

// Adicionando elementos com splice()
let numeros = [1,2,3,4];
numeros.splice(5, 0, 5); // Adiciona 5 ao final
console.log(numeros);

// Substituindo elementos com splice()
let nomes = ['Laura', 'Sabrina', 'Caique'];
nomes.splice(1,1,'Winicius'); // Substitui sabrina por winicius
console.log(nomes);