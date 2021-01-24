'use-strict';

var readlineSync = require('readline-sync');
let num1 = readlineSync.questionFloat('Please enter a number? ');
let num2 = readlineSync.questionFloat('Please enter another number?'); 

function tens(x,y){
    if (x+y == 10) {
        console.log('Makes 10');
    } else {
            console.log('Nope');
        }
    }
tens(num1,num2);
