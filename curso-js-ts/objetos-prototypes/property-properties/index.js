// Exercício: Definição de Propriedades de um Objeto

/*
 * Criar um objeto que represente uma pessoa e usar Object.defineProperty() e Object.defineProperties() 
 * para definir suas propriedades de maneira controlada.
 */

let pessoa = {};

Object.defineProperty(pessoa, 'nome', {
    value: 'Laura',
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(pessoa, 'idade', {
    value: 19,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(pessoa, 'email', {
    get() {
        return 'laura@email.com'
    },
    enumerable: true,
    configurable: false
});

Object.defineProperties(pessoa, {
    nacionalidade: {
        _nacionalidade : '',

        get() {
            return this._nacionalidade;
        },
        set(valor) {
            this._nacionalidade = valor;
        },
        
        enumerable: true,
        configurable: true
    },
    altura: {
        _altura: 0,
        
        get() {
            return this._altura;
        },
        set(valor) {
            if(valor > 0) {
                this._altura = valor;
            } else {
                console.log('A altura deve ser maior que zero');
            }
        },

        enumerable: true,
        configurable: true
    }
});

pessoa.nacionalidade = 'br'
console.log(pessoa.nacionalidade);

pessoa.altura = 1.70;
console.log(pessoa.altura);

pessoa.email = 'lauravbarauna@gmail.com';
console.log(pessoa.email);