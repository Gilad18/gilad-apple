'use-strict';

var readlineSync = require('readline-sync');
let num1 = readlineSync.questionFloat('Please choose a number larger than 10? ');
while (num1<=10) {
    let num1 = readlineSync.questionFloat('Please choose a number LARGER than 10? ');
    if (num1>10) {
        console.log('Thank you!');
        break;
            }
} 
