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

function game(e) {

playerSelection = e.target.id;
computerSelection = getComputerChoice();

if (computerSelection == playerSelection) {

    console.log("Draw! You chose the same as the computer")
    draw++

} else if (
    playerSelection != "rock" && 
    playerSelection != "paper" && 
    playerSelection != "scissors"
    ){
    
    console.log(`Invalid choice! You wrote ${playerSelection}`)

} else if (
    computerSelection == "rock" && 
    playerSelection == "paper" || 
    computerSelection == "paper" && 
    playerSelection == "scissors" || 
    computerSelection == "scissors" &&
     playerSelection == "rock"
     ){

    console.log(`You win! You chose ${playerSelection} and the computer chose ${computerSelection}`)
    win++

} else {
    console.log(`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`)
    lose++
}
}

let rock = document.querySelector('#rock').addEventListener('click', game);
let paper = document.querySelector('#paper').addEventListener('click', game);
let scissors = document.querySelector('#scissors').addEventListener('click', game);
let gameResult = document.querySelector('#results');