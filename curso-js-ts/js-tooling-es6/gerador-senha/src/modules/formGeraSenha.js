import geraSenha from './geradores'

const botao = document.querySelector('.gerar-senhas');
const inputTamanhoSenha = document.querySelector('.tamanho-senha');

const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

export default botao.addEventListener('click', () => {
    let tamanhoSenha = Number(inputTamanhoSenha.value);
    
    let upper = false;;
    let lower = false;;
    let number = false;;
    let symbol = false;;
    
    if(chkMaiusculas.checked) upper = true;
    if(chkMinusculas.checked) lower = true;
    if(chkNumeros.checked) number = true;
    if(chkSimbolos.checked) symbol = true;

    geraSenha(upper, lower, number, symbol, tamanhoSenha);

})