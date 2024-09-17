## Explicação do Exercício

Este exercício foi um desafio para mim, mas, após muita pesquisa, consegui entender e implementar a solução.

### Lógica Geral:

O objetivo do cronômetro que desenvolvi é atualizar o tempo a cada segundo. Para isso, utilizei uma variável de **contador** que é incrementada a cada 1 segundo quando o botão "Iniciar" é clicado. Essa variável de contador representa os segundos.

O truque aqui é usar o **objeto Date** para exibir o tempo. O Date automaticamente "sabe" como lidar com o tempo, por exemplo, quando atinge 60 segundos, ele converte para 1 minuto, 0 segundos, e assim por diante.

### Código Explicado:

#### 1. Primeira Parte: Função para Formatar o Tempo (Objeto Date)

Comecei criando uma função chamada `criaHoraDosSegundos`, que recebe um número de segundos. Nessa função, utilizei o objeto **Date** para converter esses segundos em um formato de hora padrão (`hh:mm:ss`).

- Multipliquei os segundos por 1000 para convertê-los de segundos para milissegundos, já que o objeto **Date** trabalha com milissegundos.
- Depois, usei o método **toLocaleTimeString** para formatar a hora de forma correta, sem o sistema de 12 horas (AM/PM), e forcei a exibição no formato "00:00:00" através da configuração de fuso horário (UTC).

#### 2. Segunda Parte: Seleção de Elementos HTML

Nesta parte, selecionei os elementos HTML que manipulei com o JavaScript. Estes elementos são os botões de **iniciar**, **pausar** e **zerar**, além da área onde o relógio é exibido.

#### 3. Terceira Parte: Variáveis Globais

Criei duas variáveis principais:

- **contador**: Começa em 0 e é responsável por contar o tempo em segundos.
- **contadorSegundos**: Armazena a referência para o `setInterval`. Ela começa indefinida e é usada para iniciar e parar o cronômetro.

Essas variáveis foram declaradas fora das funções porque precisam ser acessíveis em diferentes partes do código.

#### 4. Quarta Parte: Quando Clico no Botão "Iniciar"

Aqui a mágica acontece! Quando clico no botão "iniciar", verifico se o cronômetro já está rodando, para evitar múltiplos intervalos rodando ao mesmo tempo. Se não estiver, atribuo à variável **contadorSegundos** um `setInterval`, que chama a função **count** a cada 1 segundo.

- A função **count** é responsável por atualizar o valor na tela. Ela usa a função `criaHoraDosSegundos`, passando o valor do **contador**, e aumenta o contador a cada execução (`contador++`).

#### 5. Quinta Parte: Quando Clico no Botão "Pausar"

Quando clico no botão "pausar", uso a função `clearInterval` para interromper o `setInterval` que estava rodando no botão "iniciar". Também redefino a variável **contadorSegundos** para `null`, permitindo que eu possa reiniciar o cronômetro mais tarde, se necessário.

##### Por que o relógio para na tela, mesmo sem `innerHTML` no botão "pausar"?

O que acontece é que o botão "pausar" simplesmente interrompe a função que atualiza o relógio (a função **count**), mas o valor que já está sendo exibido na tela permanece lá. Como o `innerHTML` já foi definido pela função **count**, ele não precisa ser atualizado novamente até que o cronômetro volte a rodar.

#### 6. Sexta Parte: Quando Clico no Botão "Zerar"

Ao clicar no botão "zerar", pauso o cronômetro e redefino o **contador** para 0. Depois, atualizo o valor exibido no relógio com a função `criaHoraDosSegundos`, passando o contador zerado para que o relógio volte ao "00:00:00".
