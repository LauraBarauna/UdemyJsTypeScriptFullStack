function aleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored  = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled );
}

function promisses(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Cai no erro');
            return;
        } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise');
            return;
        }, tempo);
    });
  }

const promises = [
    // 'Primeiro valor',
    promisses('Promise 1', aleatorio(1000, 5000)),
    promisses('Promise 2', aleatorio(1000, 5000)),
    promisses('Promise 3', aleatorio(1000, 5000))
    // promisses(1000, 1000),
    // 'Outro valor'
];

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cahce');
    } else {
        return promisses('Baxai a págia', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.lof('ERRO', e));