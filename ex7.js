'use-strict';

var readlineSync = require('readline-sync');
let num1 = readlineSync.questionFloat('Please enter a positive number: ');

function factorial(x) {
  if (x === 0 || x === 1)
    return 1;
  for ( i = x - 1; i >= 1; i--) { 
      x = x * i;
  }
  return x;
}

  while (Number.isInteger(num1)===false||num1<0) {
  console.log("Wrong number was type!"); 
  num1 = readlineSync.questionFloat('Please enter a positive number: ');          
          }  if (Number.isInteger(num1)===true&&num1>=0) {
      console.log(num1+'! = '+factorial(num1));
}
  
