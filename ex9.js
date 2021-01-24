'use-strict';

var readlineSync = require('readline-sync');
let userInput = readlineSync.questionInt('Enter a number? ');

checkResult = false;

function isPrime (x) {
    if(x==1) return y=true;
    else if (x==2) {return y=false;}
    else if (x>2) {
for (let i=2;i<x;i++){
  if(x%i==0) {return checkResult =true ; break;}
  }}}
 

  for(let y=1;y<=userInput;y++) {
if (isPrime(y)!==true) {
    console.log(y+ ' is PRIME');
} else {console.log(y+ " is not prime")};
}
        
       


