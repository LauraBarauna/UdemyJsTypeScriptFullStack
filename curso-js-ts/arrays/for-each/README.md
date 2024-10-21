# For Each
O método `forEach()` é usado para executar uma função para cada elemento de um array. Ele percorre o array e, em cada iteração, executa uma função callback que você define, passando como argumento o valor do elemento atual.

## Características
- Não retorna nada (diferente de `map()`, `filter()`, ou `reduce()`).

- Serve para realizar ações ou efeitos colaterais em cada elemento (como exibir no console ou modificar algo fora do loop).

- Não interrompe o loop — ele percorre todos os elementos, mesmo que a condição desejada seja encontrada (diferente de um loop `for` ou `while` com break).

## Sintaxe
```js
array.forEach(function(elemento, indice, array) {
  // ação a ser executada para cada elemento
});

```

- elemento: O elemento atual do array.

- indice (opcional): O índice do elemento atual.

- array (opcional): O próprio array sobre o qual `forEach()` está sendo executado.

## Quando usar:

- Quando você quer iterar por um array, mas não precisa retornar um novo array ou valor agregado.

- Para realizar ações em cada item, como imprimir algo, modificar um estado externo, ou realizar operações que não envolvem transformar o array.

## Limitações:

- Não retorna valores. Se você precisar gerar um novo array ou obter um valor agregado, use `map()`, `filter()`, ou `reduce()`.

- Não interrompe o loop. Se você precisar parar a iteração ao encontrar uma condição específica, um `for` ou `while` seria mais apropriado.

### Exemplos estão no [index.js]()

