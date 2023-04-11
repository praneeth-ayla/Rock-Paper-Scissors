let userInput=prompt("Chose rock paper scissors: ").toLowerCase();
console.log(userInput)
let userScore= 0;
let computerScore= 0;

function getComputerChoice(){
let computerInput = Math.floor((Math.random() * 3) + 1);
if (computerInput === 1 ){
    computerInput = "rock"
} else if (computerInput === 2 ){
computerInput= "paper"
}else if (computerInput === 3 ){
    computerInput= "scissors"
}

return computerInput
}
console.log(getComputerChoice())





// for (let n = 0; n < 5; n++) {
    

// }
