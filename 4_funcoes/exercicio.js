var r = require("readline-sync");

var operacao = (r.question('Escolha uma operacao '));
var valor1 = parseInt(r.question('Qual e o valor 1? '));
var valor2 = parseInt(r.question('Qual o valor 2: '));


switch (operacao) {
    case '+':
        var r = soma(valor1, valor2);
        console.log(r);
        break;

    case '-':
        var s = subtrair(valor1, valor2);
        console.log(s);
        break;

    case '*':
        var m = multiplicar(valor1, valor2);
        console.log(m);
        break;

    case '/':
        var d = divisao(valor1, valor2);
        console.log(d);
        break;

    default:
}

function soma(valor1, valor2) {
    var resultado = valor1 + valor2;
    return resultado;
}

function subtrair(valor1, valor2) {
    var resultado = valor1 - valor2;
    return resultado;
}

function multiplicar(valor1, valor2) {
    var resultado = valor1 * valor2;
    return resultado;
}

function divisao(valor1, valor2) {
    var resultado = valor1 / valor2
    return resultado;
}
                            
