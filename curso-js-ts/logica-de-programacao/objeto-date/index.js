// const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms
// const data = new Date ('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do 0s
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 é Domingo e 6 é sábado
// console.log(data.toString())
// console.log(Date.now());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
     const dia = zeroAEsquerda(date.getDate());
     const mes = zeroAEsquerda(date.getMonth() +1);
     const ano = zeroAEsquerda(date.getFullYear());
     const hora = zeroAEsquerda(date.getHours());
     const minuto = zeroAEsquerda(date.getMinutes());
     const segundo = zeroAEsquerda(date.getSeconds());

     return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);