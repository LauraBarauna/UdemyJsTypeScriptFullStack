const numero = Number(prompt("Digite um número")); 
const raizQuadrada = numero ** 0.5;
let respostas;

function NumeroInteiro(){
    if(Number.isInteger(numero)){
        return "Sim";
    }else{
        return "Não";
    }
}

function NotANumber(){
    if(isNaN(numero)){
        return "Sim";
    }else{
        return "Não";
    }
}

const arredondandoBaixo = Math.floor(numero);
const arredondandoCima = Math.ceil(numero);
const duasCasasDecimais = numero.toFixed(2);

numeroTitulo = document.getElementById("numeroTitulo").innerHTML = `O número é ${numero}`
perguntas = document.getElementById("perguntas").innerHTML = `Raiz quadrada: ${raizQuadrada} <br/> 
${numero} é inteiro? ${NumeroInteiro()}<br/> É NaN? ${NotANumber()} <br/> 
Arredondando pra baixo: ${arredondandoBaixo} <br/>
Arredondando pra cima: ${arredondandoCima} <br/>
Com duas casas decimais: ${duasCasasDecimais}`
