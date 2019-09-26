//resposta aqui

/* A loja Lumelância precisa de uma nova função no seu sistema para calcular um desconto nos seus produtos.

Você deverá seguir os seguintes passos:

- Crie uma variável que irá guardar o array com nome e valor dos produtos
- Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
- Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
- Procure no array qual produto foi escolhido pelo usuário
- Calcule o desconto do produto
- Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto.

*/


var r = require("readline-sync");
var produtos = [
    { nome: "alface", preco: 1.99 },
    { nome: "cenoura", preco: 2.99 },
    { nome: "batata", preco: 4.99 },
       
];

var posicao = parseInt(r.question("Escolha um produto entre 0 e 2: "));
var porcentagem = parseInt(r.question("Digite uma porcentagem: "));

var produtoSelecionado = produtos[posicao];
var desconto = produtoSelecionado.preco * (porcentagem / 100);

console.log("Produto " + produtoSelecionado.nome + " com desconto é R$ " + desconto.toFixed(2));
