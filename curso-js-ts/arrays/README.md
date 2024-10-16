# Array
Um array é uma estrutura de dados usada para armazenar vários valores em uma única variável. Em vez de criar várias variáveis para armazenar dados relacionados, você pode colocar todos esses valores em um array.

## Como criar um array
Você pode criar um array de duas maneiras principais:

1. Usando colchetes ([]):
```js
let frutas = ['maçã', 'banana', 'laranja'];
```
2. Usando o construtor Array():
```js
let carros = new Array('BMW', 'Audi', 'Mercedes');
```

## Acessando os elementos de um array
Os elementos de um array são acessados pelos seus índices, começando do 0.
```js
console.log(frutas[0]); // 'maçã'
console.log(frutas[1]); // 'banana'
```

## Propriedade length
A propriedade length retorna o número de elementos no array.
```js
console.log(frutas.length); // 3
```

## Adicionando elementos ao array
Você pode adicionar elementos no **final** de um array usando o método `push()`.

```js
frutas.push('uva');
console.log(frutas); // ['maçã', 'banana', 'laranja', 'uva']
```

Para adicionar no **início**, você pode usar `unshift()`:

```js
frutas.unshift('abacaxi');
console.log(frutas); // ['abacaxi', 'maçã', 'banana', 'laranja', 'uva']
```

## Removendo elementos do array
Para remover o **último** elemento, você pode usar `pop()`:
```js
frutas.pop();
console.log(frutas); // ['abacaxi', 'maçã', 'banana', 'laranja']
```

E para remover o **primeiro** elemento, `shift()`:
```js
frutas.shift();
console.log(frutas); // ['maçã', 'banana', 'laranja']
```

## Iterando sobre um array
Você pode usar o loop `for` para percorrer um array e acessar seus elementos:

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

Ou pode usar o método `forEach()`, que é uma maneira mais direta de iterar sobre os elementos:

```js
frutas.forEach(function(fruta) {
  console.log(fruta);
});
```

### Esses são os conceitos básicos sobre arrays em JavaScript.











