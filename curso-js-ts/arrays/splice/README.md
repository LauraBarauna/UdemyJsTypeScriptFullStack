# Splice
O método `splice()` no JavaScript é muito útil para adicionar, remover ou substituir elementos em um array. 

Ele é bastante **flexível**, pois você pode especificar a partir de qual posição quer fazer as alterações e quantos elementos deseja modificar.

## Sintaxe
```js
array.splice(indice, quantosRemover, elemento1, elemento2, ..., elementoN);
```

- indice: A posição inicial no array onde você quer começar as modificações.

- quantosRemover: A quantidade de elementos que você quer remover a partir do índice.
- elemento1, elemento2, ..., elementoN: **(Opcional)** Os elementos que você quer adicionar no lugar dos que foram removidos.

### O método splice() modifica o array original. Se você precisar apenas de uma cópia modificada do array sem alterar o original, pode usar métodos como slice().

### Exemplos estão no [index.js]()