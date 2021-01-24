'use-strict';

var readlineSync = require('readline-sync');
let str1 = readlineSync.question('Please write a sentance: ');  


if(str1.charCodeAt(0)>=97&&str1.charCodeAt(0)<=122) {
    console.log("in the range");
} else if (str1.charCodeAt(0)>=65&&str1.charCodeAt(0)<=90) {
    console.log("in the range");}
    else {console.log("not in the range");}



