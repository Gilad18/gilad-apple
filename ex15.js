'use-strict';

var readlineSync = require('readline-sync');

let input1 = readlineSync.question('\nPlease enter a string: '); 
let inpit2 = readlineSync.question('\nPlease enter another string: '); 

let arr1 = input1.split(' '); 
let arr2 = inpit2.split(' '); 
let arr3 = arr1.concat(arr2);

console.log(arr3);