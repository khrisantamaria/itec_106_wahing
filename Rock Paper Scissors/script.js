const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".game-button img");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.alt.toLowerCase();
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    } else if (
        (computerChoice === 'rock' && userChoice === "paper") ||
        (computerChoice === 'paper' && userChoice === "scissors") ||
        (computerChoice === 'scissors' && userChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "Aw, you lost!";
    }
    resultDisplay.textContent = result;
}
