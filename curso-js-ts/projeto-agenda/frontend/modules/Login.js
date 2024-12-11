import validator from 'validator';

const erroEmailCadastro = document.querySelector('.erro-email-cadastro');
const erroSenhaCadastro = document.querySelector('.erro-senha-cadastro');
const erroEmailLogin = document.querySelector('.erro-email-login');
const erroSenhaLogin = document.querySelector('.erro-senha-login');

class Formulario {
    constructor(formClass, erroEmail, erroSenha) {
        this.form = document.querySelector(formClass);
        this.erroEmail = erroEmail;
        this.erroSenha = erroSenha;
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        this.erroEmail.innerText = '';
        this.erroSenha.innerText = '';

        // E-mail
        if (!validator.isEmail(emailInput.value)) {
            this.erroEmail.innerText = 'Email inválido!';
            error = true;
        }

        // Senha
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.erroSenha.innerText = 'Senha precisa ter entre 3 e 50 caracteres!';
            error = true;
        }

        if (!error) el.submit();
    }
}

export class Cadastro extends Formulario {
    constructor(formClass) {
        super(formClass, erroEmailCadastro, erroSenhaCadastro);
    }
}

export class Login extends Formulario {
    constructor(formClass) {
        super(formClass, erroEmailLogin, erroSenhaLogin);
    }
}
