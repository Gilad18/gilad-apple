'use-strict';

var readlineSync = require('readline-sync');

let myArry = [ 1, 2 ,3 ,4, 5, 6, 7, 8, 9];

function revArr (x) {
     x.reverse();
}

revArr(myArry);

console.log(myArry);