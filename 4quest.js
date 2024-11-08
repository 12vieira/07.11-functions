// Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.


const prompt = require('prompt-sync')();

function reais(a){
    if(a > 0){
        return('P');
    } else{
        return('N');
    }
}

let x = parseFloat(prompt(`Digite um número: `))
console.log(`Argumento ${reais(x)}`);