'use-strict';

var readlineSync = require('readline-sync');
let party = readlineSync.question('How many people are you going with? '); //I didn't use the questionFloat here to give the user option to type invalid tab for the question purpose.
function checking (x) {
   if (isNaN(x)) {
        throw  ('Sorry, invalid Key. Goodbye');  // the program indeed exit with a message but I think I didn't do it correctly
   }}
   checking(party);
   

   if (kosher.keyInYN('Do you want Kosher?')) {
    // 'Y' key was pressed.
    console.log('Installing now...');
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
  }

let kosher = readlineSync.keyInYNStrict('Should it be Kosher?');
if (kosher === true) {
       let mehadrin = readlineSync.keyInYNStrict('Should it be \'Lemehadrin?\'') ;}
      

 frameworks = ['Asian', 'Italian', 'Local', 'American', 'French'];
let foodType = readlineSync.keyInSelect(frameworks, 'What kind of food do you want?');

if (foodType===0&&kosher===true&&mehadrin1===true){         // I couldnt figure how to combine also the mehadrin results in the follwing IF statments
    console.log("Meathos");
} else if (foodType===0&&kosher===true&mehadrin1==false) {
    console.log("Zozobra");
} else if (foodType===0&kosher===false) {
    console.log("Magazzino");
} else if (foodType===1&&kosher===false) {
    console.log("Goocha");
} else if (foodType===2&&kosher===true) {
    console.log("Ha\'achim");
} else if (foodType===2&&kosher===false) {
    console.log("Romano");
}else if (foodType===3&&kosher===true) {
    console.log("Diner");
} else if (foodType===3&&kosher===false) {
    console.log("America Burger");  
} else if (foodType===4&&kosher===true) {
    console.log("Goshen");
} else if (foodType===4&&kosher===false) {
    console.log("Breasserie");  
}



