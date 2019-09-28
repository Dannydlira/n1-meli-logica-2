const r = require ("readline-sync");


let passos = 0;
const metaUsuario = 500;

do{
    console.log(`${passos}`);
      passos += parseInt(r.question("Digite outro numero: "));
 }while(passos < metaUsuario)

 console.log("Parabéns a meta foi atingida!");
