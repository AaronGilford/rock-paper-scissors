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

let win = 0
let draw = 0
let lose = 0
let computerSelection
let playerSelection

function game() {
playerSelection = prompt("Rock, Paper or Scissors?")
playerSelection = playerSelection.toLowerCase();

computerSelection = getComputerChoice();

if (computerSelection == playerSelection) {
    console.log("Draw! You chose the same as the computer")
    draw++
} else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    console.log(`Invalid choice! You wrote ${playerSelection}`)
} else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "scissors" || computerSelection === "scissors" && playerSelection == "rock") {
    console.log(`You win! You chose ${playerSelection} and the computer chose ${computerSelection}`)
    win++
} else {
    console.log(`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`)
    lose++
}
}

while (true) {
    if ((win + lose) < 5 && win < 3 && lose < 3) {
        console.log(`You have ${win} wins, ${lose} losses and ${draw} draws`)
        game()
    } else {
        console.log(`The final score is: ${win} wins, ${lose} losses and ${draw} draws`)
        break;
    }
}