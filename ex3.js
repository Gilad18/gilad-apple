'use-strict';

var readlineSync = require('readline-sync');
let num1 = readlineSync.questionFloat('Choose a number between 0-9\n');
if (num1==0) {
    console.log('ZERO');
    } else if (num1==1) {
        console.log('ONE');
    } else if  (num1==2) {
        console.log('TWO');
    } else if  (num1==3) {
        console.log('THREE');
    } else if  (num1==4) {
        console.log('FOUR');
    } else if  (num1==5) {
        console.log('FIVE');
    } else if  (num1==6) {
        console.log('SIX');
    } else if  (num1==7) {
        console.log('SEVEN');
    } else if  (num1==8) {
        console.log('EIGHT');
    } else if  (num1==9) {
        console.log('NINE');
    }
