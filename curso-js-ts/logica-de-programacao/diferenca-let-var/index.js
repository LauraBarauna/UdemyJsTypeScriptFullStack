const verdadeira = true;

// Let tem escopo de bloco
// Var tem escopo de função

let nome = 'Laura';
var nome2 = 'Laura';
var nome2 = 'Isabela';
console.log(nome, nome2);

if(verdadeira){
    let nome = 'Barauna';
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}