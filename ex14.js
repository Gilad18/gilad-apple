'use-strict';

var readlineSync = require('readline-sync');

let userInput = readlineSync.questionInt('\nPlease enter a number: '); 
let arrLeng = userInput-1;

let myarr = [];

for (let i=0; i<=arrLeng; i++){
    myarr[i]=Math.floor(Math.random() *50)+1;
}

console.log(myarr);

let maxValue = myarr[0];
let minValue = myarr[0];

for(let i=0; i<=myarr.length; i++){
    if(myarr[i]>maxValue)  maxValue=myarr[i];
}
for(let n=0; n<=myarr.length; n++){
    if(myarr[n]<minValue)  minValue=myarr[n];
}

console.log('The Maximum number in the array is: '+maxValue);
console.log('The Minimum number in the array is: '+minValue);
