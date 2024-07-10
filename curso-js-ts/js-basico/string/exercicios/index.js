// Exercício

const nome = prompt("Digite seu nome: ");
const quantidadeLetras = nome.length;
const segundaLetra = nome[1];
const indiceLetraPrimeira = nome.indexOf('u')
const indiceLetraUltima = nome.lastIndexOf('u');
const tresUltimasLetras = nome.slice(10)

const letrasMaiusculas = nome.toLocaleUpperCase();
const letrasMinusculas = nome.toLocaleLowerCase();

  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ${quantidadeLetras} letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra u no seu nome? ${indiceLetraPrimeira}<br />`;
  document.body.innerHTML += `Qual o último índice da letra u no seu nome? ${indiceLetraUltima}<br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${tresUltimasLetras}<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${letrasMaiusculas}<br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ${letrasMinusculas}<br />`;
