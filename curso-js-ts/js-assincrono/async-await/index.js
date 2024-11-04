function aleatorio(min = 0, max = 3000) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no erro');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise');
            return;
        }, tempo);
    });
}


//   esperaAi('Fase 1', aleatorio())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', aleatorio());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', aleatorio());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase: ', fase);
//   })
//   .catch(e => console.log('ERRO', e))

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();