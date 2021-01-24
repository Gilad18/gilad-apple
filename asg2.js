'use-strict';

var readlineSync = require('readline-sync');
let budget = 50;
console.log('\n***************************************\n****** WELCOME TO THE WAR GAME ********\n***************************************\n');      
option1 = ['Please remind me the rules...', 'I know all about it, Let\'s play!'];                           
let answer1 = readlineSync.keyInSelect(option1, 'Do You know how we play here?');
if (answer1===0) {console.log('\nThe Rules are simple:\n1.Decide how much do you want to bet out of your budget.\n2.Each one of us get a card.\n3.The one with the higher card wins the bet!\n\nGood luck!');}  

option2 = ['1 Player', '2 Players'];                           
let answer2 = readlineSync.keyInSelect(option2, 'Select the numbers of players?');

if(answer2===0){
let userName = readlineSync.question('\nWhat is your name? ');
console.log('\nHi ' + userName + ', your budget is: ' + budget + ' ILS');     
while (budget>0) {
let newRound = readlineSync.keyInYNStrict('\nWould you like to have a new round? ');
if (newRound === true) {
    let bet = readlineSync.questionFloat('\nPlease enter your bet: '); 
    if (bet>budget) {
       console.log('You can\'t afford it, please change your bet.');} 
      else if (bet<=0) { 
        console.log('That\'s not going to work pale! plaese change your bet ');
       } else {
    let p1 = Math.floor(Math.random() *12)+1;
    let p2 = Math.floor(Math.random() *12)+1;

  console.log('\nYour card is: '+p1+' || My card is: '+p2);                
  
  if(p1>p2) {                                                                   
       budget = budget + bet;
       console.log('\nYou won! You have now:  ' + budget  + ' ILS');
   } else if (p1==p2) {
          console.log('\nIt\'s a Tie! Nothing changed, you still have '+budget+ ' ILS');
       } else if (p1<p2){ 
                 budget = budget - bet;
                console.log('\nYou Lost! You have now: ' + budget + ' ILS');
              }
         }   
 }   else {       console.log('\nOK '+userName+', you got ' +budget+ ' ILS, Nice Job!\nThank you and goodbye!\n');
               break;       
                  }
}  if (budget==0) { console.log('\n----------- Game Over -----------\n');}}   

else if (answer2===1) {   
   let userName1 = readlineSync.question('\nWhat is player 1 name? ');
   let userName2 = readlineSync.question('\nWhat is player 2 name? ');
console.log('\nHi ' + userName1 + ' and '+userName2+', you both have 50 ILS');     
let budget1 = 50;
let budget2 = 50;

while (budget1>0&&budget2>0) {
let newRound1 = readlineSync.keyInYNStrict('\n'+userName1+' and '+userName2+', Would you like to have a new round? ');

if (newRound1 === true) {
    let bet1 = readlineSync.questionFloat('\n'+userName1+' and '+userName2+', Please agree on a bet and enter it here: '); 
        if (bet1>budget1||bet1>budget2) {
       console.log('\nPlease change your bet to an amount you both can afford!');} 
      else if (bet1<=0) { 
        console.log('\nThat\'s not going to work guys! plaese change your bet ');
       } else {
    let p1 = Math.floor(Math.random() *12)+1;
    let p2 = Math.floor(Math.random() *12)+1;

  console.log('\n'+userName1+'\'s card is: '+p1+' || '+userName2+'\'s card is: '+p2);            
  

  if(p1>p2) {                                                                   
       budget1 = budget1+ bet1; budget2=budget2-bet1;
       console.log('\n'+userName1+', you won! You have now:  ' + budget1  + ' ILS. I\'m sorry '+userName2+', you have now: '+budget2+' ILS');
   } else if (p1==p2) {
          console.log('\nIt\'s a Tie! Nothing changed. '+userName1+', you still got: ' +budget1+ ' ILS and '+userName2+', you still got: ' +budget2+' ILS');
       } else if (p1<p2){ 
                 budget1 = budget1 - bet1; budget2=budget2+bet1;
                 console.log('\n'+userName2+', you won! You have now:  ' + budget2 + ' ILS. I\'m sorry '+userName1+', you have now: '+budget1+ ' ILS');
              }
         }   
 }   else {       console.log('\nOK guys, tha\'t was fun! '+userName1+', you got: ' +budget1+ ' ILS and '+userName2+', you got: ' +budget2+' ILS.\nThank you and goodbye!\n');
               break;       
                  }
}  if (budget1==0||budget2==0) { console.log('\n----------- Game Over -----------\n');}}


