
const senhaGeradaHTML = document.querySelector('.senha-gerada');

export default function geraSenha(maiuscula, minuscula, num, simbolo, tamanho) {
    senhaGeradaHTML.innerText = '';

    let senhaConcatenada = '';
    let senhaGerada = '';

    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const numeros = '0123456789';
    const simbolos = '@#$*!%&/';

    if (maiuscula) senhaConcatenada += maiusculas;
    if (minuscula) senhaConcatenada += minusculas;
    if (num) senhaConcatenada += numeros;
    if (simbolo) senhaConcatenada += simbolos;

    for (let i = 0; i < tamanho; i++) {
        senhaGerada += senhaConcatenada.charAt(Math.floor(Math.random() * senhaConcatenada.length));
    }


    return senhaGeradaHTML.innerText = senhaGerada

}


geraSenha()