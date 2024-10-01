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

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors: ");

    if (humanChoice === ("rock" || "paper" || "scissors")) {
        return humanChoice;
    }
    else {
        console.log("You did not choose, rock paper or scissors!")
        getHumanChoice();
    }
}

console.log("The computer's choice is: " + getComputerChoice());
console.log("The user's choice is: " + getHumanChoice());