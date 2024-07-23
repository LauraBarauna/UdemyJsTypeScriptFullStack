const pessoa = {
    nome: 'Laura',
    sobrenome: 'Barauna',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    }
};

// Atribuição via desetruturação
// const {nome = 'Não existe', sobrenome} = pessoa; // Colocando valor na váriav caso a variável não tenha
//console.log(nome, sobrenome);

//const {nome: n, sobrenome} = pessoa; // Mudando nome da variável
//console.log(n, sobrenome);

//conts [nome, sobrenome] = pessoa; // Modo padrão
//console.log(nome, pessoa);

//const {nome, sobrenome, endereco} = pessoa; // Exibe o objeto endereco
//console.log(endereco);

//const{endereco: {rua, numero}} = pessoa; // Especificando variável do objeto enderenco
//console.log(rua, numero);

