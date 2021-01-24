'use-strict';

var readlineSync = require('readline-sync');
let party = readlineSync.questionFloat('How many people are you going with? '); //I didn't use the questionFloat here to give the user the option to type invalid tab for the question purpose.

if (party<=0||Number.isInteger(party)===false) {
         throw "stop execution";
 } else {             

let mehadrin = false; 
let kosher = readlineSync.keyInYNStrict('Should it be Kosher?');
if (kosher === true) {
        mehadrin = readlineSync.keyInYNStrict('Should it be \'Lemehadrin?\'') ;}

 frameworks = ['Asian', 'Italian', 'Local', 'American', 'French'];
let foodType = readlineSync.keyInSelect(frameworks, 'What kind of food do you want?');

if (foodType===0&&kosher===true&&mehadrin===false){         
    console.log("Our recommendation: Meathos");
} else if (foodType===0&&kosher===true&&mehadrin===true){         
    console.log("Our recommendation: WestSide TLV");
} else if (foodType===0&&kosher===false) {
    console.log("Our recommendation: Zozobra");
} else if (foodType===1&&kosher===true&&mehadrin===false) {       
    console.log("Our recommendation: Magazzino");
} else if (foodType===1&&kosher===true&&mehadrin===true){        
    console.log("Our recommendation: 2C Azrieli");
} else if (foodType===1&&kosher===false) {
    console.log("Our recommendation: Goocha");
} else if (foodType===2&&kosher===true&&mehadrin===false) {       
    console.log("Our recommendation: Ha\'achim");
} else if (foodType===2&&kosher===true&&mehadrin===true){        
    console.log("Our recommendation: The Old Man And The Sea");
}  else if (foodType===2&&kosher===false) {
    console.log("Our recommendation: Romano");
} else if (foodType===3&&kosher===true&&mehadrin===false) {       
    console.log("Our recommendation: The Diner");
} else if (foodType===3&&kosher===true&&mehadrin===true){        
    console.log("Our recommendation: Agadir");
}  else if (foodType===3&&kosher===false) {
    console.log("Our recommendation: America Burger");  
} else if (foodType===4&&kosher===true&&mehadrin===false) {       
    console.log("Our recommendation: Hasalon");
} else if (foodType===4&&kosher===true&&mehadrin===true){        
    console.log("Our recommendation: Gosher");
}  else if (foodType===4&&kosher===false) {
    console.log("Our recommendation: Brasserie");  
}
 }


