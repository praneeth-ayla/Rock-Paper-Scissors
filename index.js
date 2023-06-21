const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".btn")
let player, computer, result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
      player = button.textContent;
      computer = computerTurn();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `computer: ${computer}`;
      resultText.textContent = singleRound(computer, player);
      roundResult = singleRound(computer, player);
    }));





function computerTurn() {
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
        return ("Won!");
    } else {
        return ("Lost!");
    }
}