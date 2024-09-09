// Escreva uma função que recebe 2 números e retorne o maior deles

function max (x ,y){
    if(x > y){
        console.log('O número '+x+' é o maior.');
    } else if(y > x){
        console.log('O número '+y+" é o maior.");
    } else{
        console.log('Os números '+x+' e '+y+' são iguais.');
    }
}

max(2, 2);