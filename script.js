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


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let gameResult = document.querySelector('#results');

let win = 0
let draw = 0
let lose = 0
let score = document.querySelector('#score');

function game(e) {

let playerSelection = e.target.id;
let computerSelection = getComputerChoice();

if (computerSelection == playerSelection) {

    gameResult.textContent = "Draw! You chose the same as the computer";
    draw++
    finalScore();

} else if (
    playerSelection != "rock" && 
    playerSelection != "paper" && 
    playerSelection != "scissors"
    ){
    
    gameResult.textContent = `Invalid choice! You wrote ${playerSelection}`;
    finalScore();

} else if (
    computerSelection == "rock" && 
    playerSelection == "paper" || 
    computerSelection == "paper" && 
    playerSelection == "scissors" || 
    computerSelection == "scissors" &&
    playerSelection == "rock"
     ){

    gameResult.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    win++
    finalScore();

} else {
    gameResult.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    lose++
    finalScore();
}
}


function finalScore() {
    if (win < 5 && lose < 5) {
            score.textContent = `You have ${win} wins, ${lose} losses and ${draw} draws`;
    } else {
            score.textContent = `Game over! The final score is: ${win} wins, ${lose} losses and ${draw} draws`;
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            winOrLose();
    }
}

function winOrLose() {
    if (win === 5) {
        newP = document.createElement("p");
        newContent = document.createTextNode("You won!")
        newP.appendChild(newContent); 
        let currentP = document.querySelector('#score');
        document.body.insertBefore(newP, currentP);
    }
    else if (lose === 5) {
        newP = document.createElement("p");
        newContent = document.createTextNode("You lost!");
        newP.appendChild(newContent);
        let currentP = document.querySelector('#score');
        document.body.insertBefore(newP, currentP);
    }
}

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);