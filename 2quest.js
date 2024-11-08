/*
1
1   2
1   2   3
.....
1   2   3   ...  n 
*/
const prompt = require('prompt-sync')();
function pyramid(x){
    let numbers = '';
    for(let i = 1; i <= x;i++){
       for(let j = 1; j <= i; j++){
        numbers = numbers + `${j}\t`;
       }numbers += '\n'
    } console.log(numbers)
}
let a = prompt(`Digite um número: `)
pyramid(a);