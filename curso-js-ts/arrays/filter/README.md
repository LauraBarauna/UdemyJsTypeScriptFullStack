# Filter
O método `filter()` no JavaScript é usado para criar um novo array com todos os elementos que passam em um teste (ou seja, para os quais a função de teste retorna true). 

É muito útil quando você precisa filtrar dados de um array com base em uma condição específica.

## Sintaxe

```js
let novoArray = array.filter(callback(elemento, índice, array), thisArg);
```
 - **callback:** Função que será executada em cada elemento do array. Ela recebe três argumentos:

- elemento: O elemento atual sendo processado no array.
- índice (opcional): O índice do elemento atual.
- array (opcional): O array completo em que o `filter()` está sendo chamado.
- thisArg (opcional): Um valor que você pode usar como this dentro da função callback.

## Não modifica o array original
Assim como `concat()`, o `filter()` não altera o array original. Ele apenas retorna um novo array com os elementos que passaram no teste.


### Exemplos estão no [index.js](https://github.com/LauraBarauna/UdemyJsTypeScriptFullStack/blob/main/curso-js-ts/arrays/filter/index.js)
