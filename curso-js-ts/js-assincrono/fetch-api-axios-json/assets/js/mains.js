
// Fetch
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

// function carregaElementosNaPagina(json) {
//     const table = document.querySelector('.tabela');

//     for(let pessoa of json) {
//         const tr = document.createElement('tr');

//         let td = document.createElement('td');
//         td.innerHTML = pessoa.nome;
//         tr.appendChild(td);

//         td = document.createElement('td');
//         td.innerHTML = pessoa.idade;
//         tr.appendChild(td);

//         td = document.createElement('td');
//         td.innerHTML = pessoa.salario;
//         tr.appendChild(td);

//         table.appendChild(tr);
//     }
    
//     const resultado = document.querySelector('.container');
//     resultado.appendChild(table);

// }

// Axios
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.dataclear))

function carregaElementosNaPagina(json) {
    const table = document.querySelector('.tabela');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    
    const resultado = document.querySelector('.container');
    resultado.appendChild(table);

}