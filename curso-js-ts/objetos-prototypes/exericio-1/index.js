function Produto (nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        get: function () {
            return estoque;
        },

        set: function (valor) {
            if(valor > 0) {
                estoque = valor;
            } else {
                console.log('Por favor, insira um números positivo!');
            }
        }
    });

    Object.defineProperties(this, {
        nome: {
            get: function () {
                return nome;
            },

            set: function (valor) {
                if(typeof valor !== 'string' || valor.trim() === '') {
                    console.log('Nome inválido!');
                } else {
                    nome = valor;
                }
            }
            
        },

        preco: {
            get: function() {
                return preco;
            },

            set: function(valor) {
                if(valor > 0) {
                    preco = valor;
                } else {
                    console.log('Por favor, digite números positivos!');
                }
            }
        }
    })

    this.descricaoProduto = function () {
        return `nome: ${nome} preço: ${preco} quantidade no estoque: ${estoque}`;
    }
}

const p1 = new Produto();
p1.nome = 'Controle TV';
p1.estoque = 10;
p1.preco = 8;

console.log(p1.nome);
console.log(p1.estoque);
console.log(p1.preco);

console.log(p1.descricaoProduto());

const p2 = new Produto();
p2.nome = 'Camiseta',
p2.estoque = 1;
p2.preco = 150;
console.log(p2.descricaoProduto());