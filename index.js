function getComputerChoice() {
let computerInput = Math.floor((Math.random() * 3) + 1);
    if (computerInput == 1 ){
        computerInput = "rock"
    } else if (computerInput == 2 ){
    computerInput= "paper"
    }else if (computerInput == 3 ){
        computerInput= "scissors"
    }
    return computerInput
}

function singleRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ) {
        return "Won!"
    } else {
        return "Lost!"
    }
}


let playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(computerSelection)

function playRound(computerSelection, playerSelection) {
    const result = singleRound(computerSelection, playerSelection);
    if (result === "Tie!") {
        console.log("It's a Tie!")
    } else if (result === "Won!") {
        console.log(`You ${result}, ${playerSelection} beats ${computerSelection}`)
    } else {
        console.log(`You ${result}, ${computerSelection} beats ${playerSelection}`)
    }
}

playRound(computerSelection, playerSelection);
