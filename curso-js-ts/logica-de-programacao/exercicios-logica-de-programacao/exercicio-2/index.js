// Escreva uma função chama ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura){
    if(largura > altura){
        return true + " A imagem está em modo paisagem.";
    } else if(altura > largura){
        return false + " A imagem está em modo retrato";
    }
}

const imgPaisagem = ePaisagem(1000, 1080);
console.log(imgPaisagem);