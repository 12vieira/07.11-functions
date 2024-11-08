//Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

const prompt = require('prompt-sync')();

function digits(a){
    let aux = a.toString();
    return(aux.length);
}
let x = parseInt(prompt(`Digite um número: `))

console.log(`o número possui: ${digits(x)} dígitos`);