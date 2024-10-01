let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

/*for (let roundsLeft = 0; roundsLeft < 5; roundsLeft++) {
    getComputerChoice();
}*/

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
    let humanChoice = (prompt("Choose rock, paper or scissors: ")).toLowerCase();
    return humanChoice;

    /*if (humanChoice == (("rock") || ("paper") || ("scissors"))) {

    }
    else {
        console.log("You did not choose, rock paper or scissors!")
    }*/
}

function playRound(humanChoice, computerChoice) {
    console.log("Welcome to round " + roundNumber);

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        console.log("You chose " + humanChoice + " which beats the computer's choice " + computerChoice + ". You win!")
        console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer");

        console.log("- - - - - - - - - - - - - - - - - - - - - -")
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log("You chose " + humanChoice + " which beats the computer's choice " + computerChoice + ". You win!")
        console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer");

        console.log("- - - - - - - - - - - - - - - - - - - - - -")
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        console.log("You chose " + humanChoice + " which beats the computer's choice " + computerChoice + ". You win!")
        console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer");

        console.log("- - - - - - - - - - - - - - - - - - - - - -")
    } else if (humanChoice ==  computerChoice) {
        console.log("You chose " + humanChoice + " which is the same as the computer's choice " + computerChoice + ". You tie!")
        console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer");

        console.log("- - - - - - - - - - - - - - - - - - - - - -")
    } else {
        computerScore++;
        console.log("You chose " + humanChoice + " which loses to the computer's choice " + computerChoice + ". You lose!")
        console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer");

        console.log("- - - - - - - - - - - - - - - - - - - - - -")
        
    }

    roundNumber++;
}

playRound(getHumanChoice(), getComputerChoice());