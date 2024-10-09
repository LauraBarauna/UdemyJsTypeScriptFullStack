function criaCalculadora() {
    return {

        // Atributos
        display: document.querySelector('.display'),

        // Métodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        // Métodos que ficam dentro do método cliqueBotoes()

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        // Método cliqueBotoes()

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                    console.log(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();