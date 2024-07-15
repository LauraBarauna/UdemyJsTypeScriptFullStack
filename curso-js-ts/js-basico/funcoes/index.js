function saudacao(nome) {
    return "Bom dia " + nome + "!";
}

const variavel = saudacao("Laura")
console.log(variavel);

function soma(x = 1, y = 1) { // Manda um valor padrão
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 2);
console.log(resultado);

const raiz = function (n) {
    return n ** 0.5;
}; // Nesse caso, precisa de ";"

const raiz2 = n => n ** 0.5; // Mesma coisa de cima, porém em arrow function

console.log(raiz(9));
console.log(raiz2(9));
console.log(raiz(16));
console.log(raiz2(16));
console.log(raiz(25));
console.log(raiz2(25));