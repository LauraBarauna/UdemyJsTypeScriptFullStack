/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estritra (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

let num1 = 10;
let num2 = 9;
let comp = num1 > num2;
console.log(comp);

comp = num2 < num1;
console.log(comp);

num2 = '10';
comp = num1 == num2;
console.log(comp); // Por isso é melhor usarmos "==="

comp = num1 === num2;
console.log(comp);

comp = num1 !== num2;
console.log(comp);