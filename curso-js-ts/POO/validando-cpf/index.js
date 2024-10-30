class Cpf {
    constructor(cpf) {

        try {
            if (typeof cpf !== 'string') {
                throw new Error('CPF precisa ser uma string');
            }


            this.cpf = cpf.replace(/\D+/g, '');
            if (this.cpf.length !== 11) {
                throw new Error('CPF precisa ter exatamente 11 dígitos');
            }

            this.cpfString = this.cpf.slice(0, 9);
            this.cpfArray = Array.from(String(this.cpf), Number);
        } catch (error) {
            console.error(error.message);
            this.cpf = null;
        }
    }

    validacaoConta(cpf, pesos) {
        let soma = cpf.reduce((acc, num) => {
            acc += num * pesos;
            pesos--;
            return acc;
        }, 0)

        const resto = soma % 11;
        let resultado = resto < 2 ? 0 : 11 - resto;

        return this.cpfString = this.cpfString.concat(resultado.toString());
    }

    validarCpf() {

        if (!this.cpf) {
            return 'CPF inválido: objeto não inicializado corretamente';
        }

        let pesos = 10;
        const pirmeiroDigitoVerificador = this.validacaoConta(this.cpfArray.slice(0, 9), pesos);

        pesos = 11;
        const segundoDigitoVerificador = this.validacaoConta(this.cpfArray.slice(0, 10), pesos);

        if (this.cpf === this.cpfString) return 'Cpf válido'
        else return 'Cpf inválido'
    }

}

try {
    const cpf = new Cpf('473.646.890-4');  // CPF inválido com mais de 11 dígitos
    console.log(cpf.validarCpf());
} catch (error) {
    console.error(`Erro ao instanciar CPF: ${error.message}`);
}



