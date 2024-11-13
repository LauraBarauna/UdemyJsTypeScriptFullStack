module.exports = class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`);
    }
}