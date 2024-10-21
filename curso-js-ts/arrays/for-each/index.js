// Exemplo básico:
let frutas = ['maçã, banana, uva'];

frutas.forEach(valor => console.log(valor));

// Exemplo com índices:
frutas.forEach((valor, indice) => console.log(`${indice+1}: ${valor}`));

// Exemplo prático:
let pessoas = ['Laura', 'Aldenir', 'Miryam'];

pessoas.forEach((valor, indice) => console.log(`Enviando e-mail para: ${valor}`));