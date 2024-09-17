function mostrarValor() {
    // Obter o elemento input
    let inputElement = document.getElementById('meuInput');

    // Obter o valor do input
    let valor = inputElement.value;
    
    //Criando nova div
    let novaDiv = document.createElement('div');
    novaDiv.className = 'nova-div';
    novaDiv.textContent = valor;

    //Criando botão de limpar tarefa
    let botaoLimparTarefa = document.createElement('button');
    botaoLimparTarefa.className = 'botao-limpar';
    botaoLimparTarefa.textContent = 'Limpar Tarefa';

    //Adicionar um evento ao botão de limpar tarefa
    botaoLimparTarefa.addEventListener('click', function(){
        containerDivs.removeChild(novaDiv);
    })

    //Adicionar botão na nova div
    novaDiv.appendChild(botaoLimparTarefa);

    //Adicionar nova div ao container
    let containerDivs = document.getElementById('containerDivs');
    containerDivs.appendChild(novaDiv);

    //Limpar input
    inputElement.value = '';
    
    
}