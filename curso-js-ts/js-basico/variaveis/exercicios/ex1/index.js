/*
Laura Isabela Barauna tem 19 anos, pesa 45 kg tem 1.7 de altura e seu IMC é de 15.570934256055365
Laura Isabela Barauna nasceu em 2005
*/

const nome = "Laura Isabela";
const sobrenome = "Barauna";
const idade = 19;
const peso = 45;
const alturaEmM = 1.70;
let imc;
let anoNascimento;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa",peso,"kg tem",alturaEmM,"de altura e seu IMC é de",imc);
console.log(nome,sobrenome,"nasceu em",anoNascimento);

console.log("=====")

// template string
console.log(`${nome,sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome,sobrenome} nasceu em ${anoNascimento}`);

