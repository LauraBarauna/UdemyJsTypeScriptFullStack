function escopo(){

const dataTexto = document.querySelector('.data');    



function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function FormatarDate(date) {

    const dia = zeroAEsquerda(date.getDate());
    const mes = date.getMonth();
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const minuto = zeroAEsquerda(date.getMinutes());
    const segundo = zeroAEsquerda(date.getSeconds());
    const diaSemana = date.getDay();
    
    let mesFormatado;
    let diaSemanaFormatada;
    
    switch(mes){
        case 0:
            mesFormatado = "Janeiro";
            break;
        case 1:
            mesFormatado = "Fevereiro";
            break;
        case 2:
            mesFormatado = "Março";
            break;
        case 3:
            mesFormatado = "Abril";
            break;
        case 4:
            mesFormatado = "Maio";
            break;
        case 5:
            mesFormatado = "Junho";
            break;
        case 6:
            mesFormatado = "Julho";
            break;
        case 7:
            mesFormatado = "Agosto";
            break;
        case 8:
            mesFormatado = "Setembro";
            break;
        case 9:
            mesFormatado = "Outubro";
            break;
        case 10:
            mesFormatado = "Novembro";
            break;
        case 11:
            mesFormatado = "Dezembro";
            break;
        default:
            mesFormatado = "Mês invalido ou não informado!";
            break;                                   
    }

    switch (diaSemana) {
        case 1:
            diaSemanaFormatada = "Segunda";
            break;
        case 2:
            diaSemanaFormatada = "Terça-feira";
            break;
        case 3:
            diaSemanaFormatada = "Quarta-feira";
            break;
        case 4:
            diaSemanaFormatada = "Quinta-feira";
            break;
        case 5:
            diaSemanaFormatada = "Sexta-feira";
            break;
        case 6:
            diaSemanaFormatada = "Sabádo";
            break;
        case 0:
            diaSemanaFormatada = "Domingo";
        default:
            diaSemanaFormatada = " Dia da semana não informado ou invalido!";
            break;
    }


    console.log(mes);
    return `${diaSemanaFormatada}, ${dia} de ${mesFormatado} de ${ano} ${hora}:${minuto}:${segundo}`;
}

const date = new Date();
dataTexto.innerHTML += `<h1>${FormatarDate(date)}</h1>`

}

escopo();

