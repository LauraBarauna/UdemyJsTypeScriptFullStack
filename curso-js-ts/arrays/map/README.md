# Map
A função `map()` em JavaScript é um método que permite transformar todos os elementos de um array, criando um novo array com o resultado da transformação. Ele executa uma função de callback para cada elemento do array original e retorna um novo array com os valores resultantes.

## Sintaxe
```js
let novoArray = array.map(callback(elemento, índice, array), thisArg);
```

- callback: Função que será executada em cada elemento do array. Ela recebe três parâmetros:

- elemento: O elemento atual sendo processado no array.
- elemento: O elemento atual sendo processado no array.
- array (opcional): O array original onde o map() está sendo chamado.
- thisArg (opcional): Um valor que pode ser usado como this dentro da função callback.

## Características importantes:
1. Cria um novo array: Ele não altera o array original, apenas retorna um novo array com os elementos transformados.

2. Aplica a função a cada elemento: A função callback é executada para cada elemento do array original.

3. Mantém o mesmo tamanho: O novo array terá o mesmo número de elementos que o array original, mas os valores podem ser diferentes dependendo do que a função callback retornar.

## Usos comuns do map()
1. Transformar dados: Muito útil quando você precisa modificar ou transformar todos os elementos de um array de maneira consistente.

2. Criar novos arrays: Ideal para criar arrays baseados em cálculos ou para selecionar propriedades específicas de objetos.

3. Formatar dados: Ótimo para formatar dados para exibição (como preços, descrições de produtos, etc.).

### Exemploes estão no [index.js]()