'use-strict';

var readlineSync = require('readline-sync');
var figlet = require('figlet');

console.log(figlet.textSync('HangMan!', {
  font: 'Ghost',
  width: 200,
  whitespaceBreak: true
}));
 
option1 = ['Please remind me the rules...', 'I know all about it, Let\'s play!'];                           
let answer1 = readlineSync.keyInSelect(option1, 'Do You know how we play here?');
if (answer1===0) {console.log('\nThe Rules are simple:\n1.You get a random word of a known beverage.\n2.Guess the letters of the word.\n3.If you successed to guess the word in less than 10 rounds - you won!\n\nGood luck!');}  
let userName = readlineSync.question('\nWhat is your name? ');

let arsenal = ["coffee", "tea", "tonic", "oranges", "americano", "water", "soda", "milk", "grapes", "wine", "lemonade", "beer", "wieskey", "sprite", "coke", "rose"]  
let word = arsenal[Math.floor(Math.random()*16)]     
let letters = word.split("");                      
let hidden = [];                  
for(i=0;i<letters.length;i++){                     
  hidden[i] = "*";
}
let guessWord = hidden.join("");    

let positions = [];                             
let finalPositions = [];                         
guessNum = 0;  
                                  
function positive (y) {                              
  return y>=0;
 }

 function onlyLetters (str){                                      
  if(str.charCodeAt(0)>=97&&str.charCodeAt(0)<=122) {
    return true; }
  else if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<=90) {
    return true; }
  else return false; }
 
function valid(x) {                                 
  if(x.length==1&&onlyLetters(x)===true) {
    return true;
   } else return false;
 }

console.log("\nHello "+userName+", your word is:   "+guessWord);                       
let userGuess1 = readlineSync.question('\nGuess a letter and type it here: ');     
let userGuess=userGuess1.toLowerCase();
 
while (guessNum<9&&word!==guessWord) {                                      
  if (valid(userGuess)!==true) {                                            
    console.log("invalid input! Only single letter is allowed!");
     userGuess1 = readlineSync.question('\nGuess a letter and type it here: ');    
     userGuess=userGuess1.toLowerCase();           
    } else {
       if (letters.indexOf(userGuess)!==-1) {                              
         guessNum=guessNum+1;                                                
         console.log("\nCORRECT! ("+ [10-guessNum]+ " more turns left)");     
         for(let i=0;i<letters.length;i++) {
          positions[i]=letters.indexOf(userGuess,i);                  
         }   
         for (let n=0;n<positions.length;n++) {
         if (positions[n]===positions[n+1]) {positions.splice(n,1)}   
        } 
        finalPositions=positions.filter(positive);              
        for(let z=0;z<finalPositions.length;z++) { 
        hidden[finalPositions[z]] = userGuess;}           
        guessWord = hidden.join("");
        console.log("\n"+guessWord);                       
        if(guessWord===word){break};                       
        decideNext = ['I know the word!', 'I still have no clue!'];                           
        let answer2 = readlineSync.keyInSelect(decideNext, 'what\'s next, '+userName+'?');
       if (answer2===0) {  
       let fullGuess = readlineSync.question('\nPlease write the word here: ');
       if(fullGuess.toLowerCase()===word) {console.log("\nAmazing Job, "+userName+"! You guessed the word!\n");break}
        else {console.log("Im sorry "+userName+", wrong guess!");}}
        userGuess1 = readlineSync.question('\nNow guess another letter: ');     
        userGuess=userGuess1.toLowerCase();
       }    else { guessNum=guessNum+1;              
                   console.log("\nWrong guess! Try again! ("+ [10-guessNum]+ " more turns left)");
                   console.log(guessWord);                
                   userGuess1 = readlineSync.question('\nGuess a letter and type it here: ');
                   userGuess=userGuess1.toLowerCase();}
}}  if  (guessNum==9&&word!==guessWord) {
  console.log("\nGame Over "+userName+"! you couldn\'t guess the word. The word was: "+word);     
}  
 else if (guessNum<=9&&word===guessWord) {
  console.log("\nCongrats "+userName+"! you guessed the word!");   
}





