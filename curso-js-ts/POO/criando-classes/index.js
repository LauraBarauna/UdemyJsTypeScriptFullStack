class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Classes já linkam os métodos no prototype
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Laura', 18);
const p2 = new Pessoa2('Miryam', 56);
console.log(p1.nome);
console.log(p1.idade);
p1.falar();
p2.falar();