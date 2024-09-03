// For in itera sobre os índices/chaves

// Com array
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

// Com objeto
const pessoa = {
    nome: 'Laura',
    sobrenome: 'Barauna',
    idade: 18
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

