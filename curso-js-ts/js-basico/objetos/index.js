// function criarPessoa(nome, sobrenome, idade){
//     return{nome, sobrenome,idade};
// }

// const pessoa1 = criarPessoa("Laura", "Barauna", 18);
// const pessoa2 = criarPessoa("Luiza", "Barauna", 32);
// const pessoa3 = criarPessoa("Lucas", "Barauna", 30);
// const pessoa4 = criarPessoa("Fernando", "Barauna", 41);
// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
// console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
// console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);

const pessoa01= {
    nome: "Laura",
    sobrenome: "Barauna",
    idade: 18,

    fala(){
        console.log(this.idade);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
