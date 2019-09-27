const r = require("readline-sync");

let nome = r.question("Digite seu nome: ");
console.log("Ola " + nome);

let texto = "";

do{
    texto = r.question("Digite algum comando ou 'Tchau' para sair");
    console.log("Voce digitou: " + texto);
}while(texto != "Tchau");

console.log("Tchau " + nome);