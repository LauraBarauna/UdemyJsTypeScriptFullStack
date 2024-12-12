import validator from 'validator';

const erroNome = document.querySelector('.erro-nome');
const erroEmail = document.querySelector('.erro-email');
const erroTelefone = document.querySelector('.erro-telefone');

export function ValidarFormUsuario(classForm) {
    this.forms = document.querySelector(classForm);
}

ValidarFormUsuario.prototype.init = function () {
    this.events();
}

ValidarFormUsuario.prototype.events = function () {
    if (!this.forms.length) return;

    this.forms.addEventListener('submit', (e) => {
        e.preventDefault();
        this.validate(e);
    });

}

ValidarFormUsuario.prototype.validate = function (e) {
    const el = e.target;
    let error = false;
    let telEmailPreenchido = false;

    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    erroNome.innerText = '';
    erroEmail.innerText = '';
    erroTelefone.innerText = '';


    if (!nomeInput.value) {
        erroNome.innerText = 'Nome é um campo obrigatório.';
        error = true;
    }

    if (!emailInput.value && !telefoneInput.value) {
        erroEmail.innerText = 'É necessário fornecer um email ou um telefone.';
        erroTelefone.innerText = 'É necessário fornecer um email ou um telefone.';

        telEmailPreenchido = true;
        error = true;
    }

    if(!!emailInput.value) {
        if (!validator.isEmail(emailInput.value)) {
            erroEmail.innerText = 'E-mail inválido!';
            error = true;
        }
    }

    if(!!telefoneInput.value) {
        if(telefoneInput.value < 20) {
            erroTelefone.innerText = 'Telefone precisa ter 13 digitos!';
            error = true;
        }
    }



    if (!error) {
        el.submit();
        console.log(telefoneInput.value.length)
    } 




}
