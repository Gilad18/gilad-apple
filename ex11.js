'use-strict';

var readlineSync = require('readline-sync');
let st1 = readlineSync.question('Please enter a word to check if it palindrome\n');

let front =' ';  
let back = ' ';
  
for( let i=0; i<st1.length; i++) {
    front = st1.charAt(i);               
 }
    for( let n=st1.length; n>=0; n--) {
    back = st1.charAt(n);                
    }

    if (front===back) {                 
        console.log ('yes! ' +st1+ ' is a palindrome word!');
    } else {console.log('No! ' +st1+ ' is not a palindrome word!'); 
}