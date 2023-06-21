const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".btn")
let player, computer, result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
      player = button.textContent;
      computer = computerTurn();
      playerText.textContent = `Player: ${player.toUpperCase()}`;
      computerText.textContent = `Computer: ${computer.toUpperCase()}`;
      resultText.textContent = `Result: ${singleRound(computer, player)}`;
      player.toLowerCase();
      
      roundResult = singleRound(computer, player);

    }));





function computerTurn() {
    let computerInput = Math.floor((Math.random() * 3) + 1);
        if (computerInput == 1 ){
            computerInput = "ROCK"
        } else if (computerInput == 2 ){
        computerInput= "PAPER"
        }else if (computerInput == 3 ){
            computerInput= "SCISSORS"
        }
        return computerInput
    }

function singleRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie!"
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") 
    ) {
        return ("You Won!");
    } else {
        return ("You Lost!");
    }
}



// let ties, playerScore, computerScore;

// while (true) {
//     if (computerScore==5) {
//         const gameOver = document.createElement("h1");
//         gameOver.textContent = `You Lost! Computer Score: ${computerScore}, Your Score: ${playerScore}`;
//     } else if (playerScore==5){
//         const gameOver = document.createElement("h1");
//         gameOver.textContent = `You Won! Your Score: ${playerScore}, Computer Score: ${computerScore}`;
//     } else {
//         singleRound(computer, player)
//     }
    
// }