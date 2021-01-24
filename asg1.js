'use-strict';

var readlineSync = require('readline-sync');
console.log('\n\t------Welcome to the Vacay Quiz------\nFind out where you should travel once the borders are open again!\n');

weather = ['Suprising', 'Sun in the sky', 'I love rain', 'Typical western'];
let q1 = readlineSync.keyInSelect(weather, '1.How do you imagine the weather?');
const ans1 = q1+1;

food = ['Fusion', 'Eclectic fine dining', 'Value for money', 'Simple'];
let q2 = readlineSync.keyInSelect(food, '2.How do you imagine the food?');
const ans2 = q2+1;

shopping = ['I buy experiences, not material', 'Just some souvenirs', 'Popular brands', 'Designers fashion'];
let q3 = readlineSync.keyInSelect(shopping, '3.How you do imagine the shopping?');
const ans3 = q3+1;

budget = ['No limit', 'Enough', 'Average', 'Low'];
let q4 = readlineSync.keyInSelect(budget, '4.What is your budget?');
const ans4 = q4+1;

people = ['Simple and warm', 'Friendly', 'Polite', 'I coudln\'t care less'];
let q5 = readlineSync.keyInSelect(people, '5.How do you imagine the locals?');
const ans5 = q5+1;

const results = ans1-ans2+ans3-ans4+ans5;

if (results<=-3) {
    console.log('\nYou should travel to:\nNepal\nYou are a free spirit and you miss mama nature!\n');
} else if (results <=-1) {
    console.log('\nYou should travel to:\nPetra\nYou just need a break with some new sights!\n');
   }   else if (results<=2) {
       console.log('\nYou should travel to:\nBudapest\nYou want comfort and some vibes in a quick getaway!\n');
   } else if (results<=4) {
       console.log('\nYou should travel to:\nNew-York\nYou live for lifestyle and you not ashamed of it!\n');
   } else if (results<=7){
       console.log('\nYou should travel to:\nZurich\nYou need some fancy and expensive vibes now!\n');
     }  else if (results<=10) {
        console.log('\nYou should travel to:\nMonaco\nYou live all the way to the top and not setteling for less than perfect!\n');
    }

