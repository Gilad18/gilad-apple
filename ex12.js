'use-strict';

var readlineSync = require('readline-sync');
let str1 = readlineSync.question('Please write a sentance: ');

var vowelsToUp = str1.replace(/a|e|i|o|u|y/gi, function (x) {return x.toUpperCase();});

console.log(vowelsToUp);


