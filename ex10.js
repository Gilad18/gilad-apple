'use-strict';

var readlineSync = require('readline-sync');
let st1 = readlineSync.question('Please write a sentence with spaces: ');
let str2 = st1.replace(/ /g ,"*");
  
console.log(str2);
 
