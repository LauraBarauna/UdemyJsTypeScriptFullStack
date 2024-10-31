function aleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored  = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled );
}

// Usando CallBack
function callBack(msg, tempo, cb) {
  setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

// callBack('Frase 1', aleatorio(1000, 3000), function() {
//     callBack('Frase 2', aleatorio(1000, 3000), function() {
//         callBack('Frase 3', aleatorio(1000, 3000), function() {
//             callBack('Frase 4', aleatorio(1000, 3000), function() {
//                 callBack('Frase 5', aleatorio(1000, 3000));
//             });
//         });
//     });
// });

// Usando promisses
function promisses(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
  }



promisses('Conexão com o BD', aleatorio(1000, 3000))
    .then(resposta =>  {
        console.log(resposta);
        return promisses('Buscando dados da BASE', aleatorio(1000, 3000));
    })
    .then(resposta => {
        console.log(resposta);
        return promisses(2222, aleatorio(1000, 3000));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela'); 
    })
    .catch( e => {
        console.log('ERRO: ', e);
    });

console.log('Isso aqui será exibido antes de qualquer promisse.')


