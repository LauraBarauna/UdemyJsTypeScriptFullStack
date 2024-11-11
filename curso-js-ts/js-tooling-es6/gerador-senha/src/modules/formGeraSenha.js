import geraSenha from './geradores'

const botao = document.querySelector('.gerar-senhas');
const inputTamanhoSenha = document.querySelector('.tamanho-senha');
const erroMsg = document.querySelector('.erro');
const checkBox = Array.from(document.querySelectorAll('input[type="checkbox"]'));

const chkMaiusculas = document.querySelector('.chk-maiusculas');  
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

export default botao.addEventListener('click', () => {
    erroMsg.innerText = '';

    let tamanhoSenha = Number(inputTamanhoSenha.value);
        
    let caixasNaoSelecionas = checkBox.filter(caixa => !caixa.checked);

    if(caixasNaoSelecionas.length === 4) {
        erroMsg.innerText = "Por favor, selecione pelo menos uma caixinha!";
        return;
    }
    
    if(tamanhoSenha <= 0) {
        erroMsg.innerText = "Por favor, insira o tamanho da senha!";
        return;
    }

    if(tamanhoSenha <= 3 || tamanhoSenha > 20) {
        erroMsg.innerText = "A senha precisa ter entre 4 e 20 caractéres!";
        return;
    } 

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