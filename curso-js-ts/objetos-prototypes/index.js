/* Crie um objeto que represente um livro, com propriedades como título, 
 * autor, ano de publicação e um método que 
 * mostre uma breve descrição do livro.
 */

let livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicao: 2018,
    descricao: function () {
        return `${this.titulo}, de ${this.autor}, é uma distopia onde o governo totalitário, liderado pelo Grande Irmão, controla tudo e suprime a liberdade. Winston Smith tenta resistir, mas enfrenta a opressão implacável do regime.`;
    }
};

console.log(livro.descricao());