//Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.

const prompt = require('prompt-sync')();

function soma(a,b,c){
    let sum = a+b+c;
    return(sum);
}
let x = parseFloat(prompt(`Digite um número: `))
let y = parseFloat(prompt(`Digite um número: `))
let z = parseFloat(prompt(`Digite um número: `))

console.log(`A soma é: ${soma(x,y,z)}`);