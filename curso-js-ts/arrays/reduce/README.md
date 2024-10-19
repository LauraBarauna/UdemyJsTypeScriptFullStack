# Reduce

O método `reduce()` em JavaScript é uma maneira poderosa de reduzir (ou acumular) todos os valores de um array em um único valor.

Ele percorre o array e, para cada elemento, executa uma função de callback que "acumula" um valor com base nos elementos do array. O resultado final desse processo é um único valor, que pode ser um número, string, objeto, ou qualquer outra coisa.

## Sintaxe

```js
let resultado = array.reduce(callback(acumulador, valorAtual, índice, array), valorInicial);
```

. callback: Função a ser executada em cada elemento do array. Ela recebe quatro parâmetros:

. acumulador: O valor acumulado (ou seja, o resultado da função anterior).

.valorAtual: O elemento atual sendo processado no array.

. índice (opcional): O índice do elemento atual.

. array (opcional): O array original sobre o qual reduce() está sendo chamado.

. valorInicial (opcional): Um valor opcional que serve como o valor inicial do acumulador. Se não for fornecido, o `reduce()` usará o primeiro elemento do array como valor inicial.


## Explicação dos exemplos

#### Exemplo 1:

1. **Primeira iteração:** ``acumulador = 0, valorAtual = 1 → acumulador = 0 + 1 = 1``

2. **Segunda iteração:** ``acumulador = 1, valorAtual = 2 → acumulador = 1 + 2 = 3``

3. **Terceira iteração:** ``acumulador = 3, valorAtual = 3 → acumulador = 3 + 3 = 6``

assim por diante...

#### Exemplo 2:
1. **Primeira iteração:** ``acumulador = 1, valorAtual = 1 → acumulador = 1 * 1 = 1``

2. **Segunda iteração:** ``acumulador = 1, valorAtual = 2 → acumulador = 1 * 2 = 2``

3. **Terceira iteração:** ``acumulador = 2, valorAtual = 3 → acumulador = 2 * 3 = 6``

assim por diante...

#### Exemplos 3:
1. **Primeira iteração:** ``acumulador = 3, valorAtual = 7 → Math.max(3, 7) → 7``

2. **Segunda iteração:** ``acumulador = 7, valorAtual = 2 → Math.max(7, 2) → 7``
3. **Terceira iteração:** ``acumulador = 7, valorAtual = 9 → Math.max(7, 9) → 9``

assim por diante...

#### Exemplo 4: 
Em cada iteração, verificamos se o acumulador já possui uma chave para a idade da pessoa. Se não tiver, criamos um array vazio para essa chave.

1. **Primeira iteração:** ``acumulador = {}, pessoa = { nome: 'Laura', idade: 19 }``

Não existe chave 19 no acumulador, então criamos: 

```js
acumulador = { 19: [{ nome: 'Laura', idade: 19 }] }
```

2. **Segunda iteração:** ``pessoa = { nome: 'Carlos', idade: 19 }``

Já existe chave 19, então adicionamos Carlos no array: 

```js
acumulador = { 19: [{ nome: 'Laura', idade: 19 }, { nome: 'Carlos', idade: 19 }] }
```

3. **Terceira iteração:** ``pessoa = { nome: 'Ana', idade: 25 }``

Não existe chave 25, então criamos: 

```js
acumulador = { 19: [{ nome: 'Laura', idade: 19 }, { nome: 'Carlos', idade: 19 }], 25: [{ nome: 'Ana', idade: 25 }] }
```

#### Exemplo 5:
Para cada fruta, verificamos se ela já está no acumulador. Se não estiver, adicionamos com o valor 1. Se já estiver, incrementamos o valor.

1. **Primeira iteração:** fruta = 'maçã' → ``acumulador = { maçã: 1 }``

2. **Segunda iteração:** fruta = 'banana' → ``acumulador = { maçã: 1, banana: 1 }``

3. **Terceira iteração:** fruta = 'maçã' → ``acumulador = { maçã: 2, banana: 1 }``

Assim por diante...

#### Exemplo 6:

1. **Primeira iteração:** 
```js
acumulador = 0, produto = { nome: 'Camiseta', preco: 20 } → acumulador = 0 + 20 = 20
```

2. **Segunda iteração:** 
```js
acumulador = 20, produto = { nome: 'Calça', preco: 50 } → acumulador = 20 + 50 = 70
```

3. **Terceira iteração:** 
```js
acumulador = 70, produto = { nome: 'Sapato', preco: 100 } → acumulador = 70 + 100 = 170
```

### Exemplo estão no [index.js](https://github.com/LauraBarauna/UdemyJsTypeScriptFullStack/blob/main/curso-js-ts/arrays/reduce/index.js)