function Cpf(cpf) {
    this.cpf = cpf;
    this.cpfLimpo = this.cpf.replace(/\D+/g, '');
    this.cpfArrayString = this.cpfLimpo.split('');
    this.cpfArrayNumero = this.cpfArrayString.reduce((acc, x) => acc.concat(+x), []);
    this.cpfPrimeirosNum = this.cpfArrayNumero.slice(0, 9);
    this.cpfUltimosNum = this.cpfArrayNumero.slice(-2);
}

Cpf.prototype.multiplicacaoEsoma = function (valor) {
    let contador = valor ? 11 : 10;
    const cpfNumeros = valor ? [...this.cpfPrimeirosNum, this.cpfUltimosNum[0]] : this.cpfPrimeirosNum;

    const multiplicacao = cpfNumeros.map(numeros => {
        let multiplicador = numeros * contador;
        contador--;
        return multiplicador;
    })

    return multiplicacao.reduce((acumulador, numeros) => acumulador += numeros, 0);

}

Cpf.prototype.equacao = function (valor) {

    let resultado = valor || this.multiplicacaoEsoma();
    const resto = resultado % 11;

    return resto < 2 ? 0 : 11 - resto;
}

Cpf.prototype.validarCpf = function () {
    let valorEquacao = this.equacao();
    console.log(valorEquacao)

    if (valorEquacao !== this.cpfUltimosNum[0]) {
        return 'Cpf inválido'
    } else {
        valorEquacao = this.equacao(this.multiplicacaoEsoma(true));
        console.log(valorEquacao)
        if (valorEquacao !== this.cpfUltimosNum[1]) {
            return 'Cpf inválido';
        } else {
            return 'Cpf válido';
        }
    }
}

const validarCpf = new Cpf('705.484.450-52');


console.log(validarCpf.validarCpf());


