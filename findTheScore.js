const prompt = require("prompt-sync")({ sigint: true });
//With readline
let input = prompt("Please Enter Any Number Here Between 1-99?");
let score = 100;
let scoreLength = 100;
let generateNumber = Math.floor(10 + Math.random() * 90);
console.log(generateNumber,'generateNumber')
for(let i=0; i<=scoreLength; i++){
    
    if(input == generateNumber){
        break ; 
    }else{
        score = score-1;
        input = prompt("Please Enter Any Number Here Between 1-99?");
    } 
}
console.log(score,'score')