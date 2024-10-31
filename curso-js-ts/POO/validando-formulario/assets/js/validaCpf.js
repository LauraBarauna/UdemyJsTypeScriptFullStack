class Cpf {
    constructor(cpf) {

        if (typeof cpf !== 'string') {
            return false;
        }


        this.cpf = cpf.replace(/\D+/g, '');
        if (this.cpf.length !== 11) {
            return false;
        }

        this.cpfString = this.cpf.slice(0, 9);
        this.cpfArray = Array.from(String(this.cpf), Number);

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
            return false;
        }

        let pesos = 10;
        const pirmeiroDigitoVerificador = this.validacaoConta(this.cpfArray.slice(0, 9), pesos);

        pesos = 11;
        const segundoDigitoVerificador = this.validacaoConta(this.cpfArray.slice(0, 10), pesos);

        if (this.cpf === this.cpfString) return true
        else return false
    }

}

// try {
//     // const cpf = new Cpf('473.646.890-4');  // CPF inválido com mais de 11 dígitos
//     // console.log(cpf.validarCpf());
// } catch (error) {
//     // console.error(`Erro ao instanciar CPF: ${error.message}`);
// }



