var r = require("readline-sync");

var produtos = [{
    {nome: "toddy", tempoDeValidade: 365, congelado: true},
    {nome: "leite", tempoDeValidade: 200, congelado: true},
    {nome: "manteiga", tempoDeValidade: 150, congelado: true},
    
}];

    var posicao = parseInt(r.question("Escolha um produto de 0 a 2: "));

    var diasParaoVencimentoDoProduto = parseInt(r.question("Quantos dias faltam para vencer? "));

    var produtoselecionado = produtos[posicao];
    var porcentagem = (diasParaoVencimentoDoProduto * 100) / produtoselecionado.tempoDeValidade;

    Console.log(porcentagem);

    if(porcentagem <= 2){
        console.log("Descartar produto, muito proximo de vencer");
    }
    else if(porcentagem)

    

    }  
         



