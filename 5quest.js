//Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.

const prompt = require('prompt-sync')();
function somaImposto(taxaImposto,custo){
    let valor = (taxaImposto/100) * custo;
    valor += custo;
    return(valor);
}

let x = parseFloat(prompt(`Digite o custo do produto: `))
let y = parseFloat(prompt(`Digite a porcentagem de imposto do produto: `))
console.log(`O valor de venda do produto ${somaImposto(y,x)}`);