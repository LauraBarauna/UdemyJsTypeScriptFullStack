function Calculadora() {
    
    // Atributos
    this.display = document.querySelector('.display');
    
    // Métodos
    this.iniciar = function() {
        this.capturarBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = function() {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.realizarConta();
            }
        });
    }

    // Métodos que ficam dentro do método capturaBotao()

    this.limparTudo = function () {
        this.display.value = '';
    }

    this.apagarUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.mostrarNoDisplay = function (valor) {
        this.display.value += valor;
    }

    this.realizarConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida!');
                return
            }

            this.display.value = String(conta);
        }catch{
            alert('Conta inválida!');
            return
        }
    }

    // Métodos capturaBotao

    this.capturarBotoes = function() {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) {
                this.mostrarNoDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.limparTudo();
            }

            if(el.classList.contains('btn-del')) {
                this.apagarUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizarConta();
            }

        });
    }
}

// Instanciando

const calculadora = new Calculadora();
calculadora.iniciar();