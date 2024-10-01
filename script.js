function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3); // Gives value of 0, 1 or 2
    let computerChoice;

    if (computerNumber === 0) {
        computerChoice = "rock";
    }
    else if (computerNumber === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

console.log(getComputerChoice());