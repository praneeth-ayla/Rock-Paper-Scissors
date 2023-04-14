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


let runLoop =prompt("How many rounds do you want to play:")
function playRound() {
    let playerCount = 0;
    let computerCount = 0;
    let tie= 0;
    for (let i=0; i<runLoop; i++){
        let playerSelection = prompt("Chose ROCK PAPER SCISSORS").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = singleRound(computerSelection, playerSelection);
        if (result === "Tie!") {
            tie+= 1
        } else if (result === "Won!") {
            playerCount+= 1
        } else {
            computerCount+= 1
        }
    }
    if (playerCount > computerCount) {
        return `You Won!, your score is ${playerCount}, computer score is ${computerCount} and ties are ${tie}`
    } else if (playerCount < computerCount) {
        return `You Won!, your score is ${computerCount}, computer score is ${playerCount} and ties are ${tie}`
    } else { 
        return `It's a Tie! score`
    }

}





let result=playRound()
console.log(result)


