function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors"
    }
}

let playerSelection = prompt("Rock, Paper or Scissors?")
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

if (computerSelection == playerSelection) {
    console.log("Draw! You chose the same as the computer")
}
else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    console.log(`Invalid choice! You wrote ${playerSelection}`)
}
else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "scissors" || computerSelection === "scissors" && playerSelection == "rock") {
    console.log(`You win! You chose ${playerSelection} and the computer chose ${computerSelection}`)
}
else {
    console.log(`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`)
}

