function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let contador = 0;
let contadorSegundos;

iniciar.addEventListener('click', function (evento) {
    
    if(!contadorSegundos){
        contadorSegundos = setInterval(count, 1000);    
    }
    
    function count(){
        relogio.innerHTML = criaHoraDosSegundos(contador++);
    }
      
})

pausar.addEventListener('click', function (evento) {
    clearInterval(contadorSegundos);
    contadorSegundos = null;    
})
 
zerar.addEventListener('click', function (evento) {
    clearInterval(contadorSegundos);
    contadorSegundos = null;
    contador = 0;
    relogio.innerHTML = criaHoraDosSegundos(contador);
})