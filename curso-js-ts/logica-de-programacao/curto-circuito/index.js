/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

function falaOi () {
    return "Oi";
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // Verificação usando curto circuito

let corUsuario = 'vermelho';
corPadrao = corUsuario || 'preto'; // Verificação usando curto circuito

