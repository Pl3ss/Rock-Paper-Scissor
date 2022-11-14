function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if (choice == 0) {
        return('rock');
    } else if (choice == 1) {
        return('paper');
    } else {
        return('scissor');
    }
}


function getPlayerChoice(element) {
    let guess = element.id;
    guessCorrection = guess.toLowerCase();
    return (guessCorrection);
}

let playerScore = 0;

let computerScore = 0; 


function RockPaperScissor(computerSelection, playerSelection) {
    let x = "";
    if (computerSelection === playerSelection) {
        x = "It's a draw, you both choose " + playerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        x = 'You lose! Paper beats rock';
        computerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        x = 'You win! Rock beats scissor';
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        x = 'You lose! Scissor beats paper';
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        x = 'You win! Paper beats rock';
        playerScore += 1;
    } else if (playerSelection === 'Scissor' && computerSelection === 'rock') {
        x = 'You lose! Rock beats scissor';
        computerScore += 1;
    } else {
        x = 'You win! Scissor beats paper';
        playerScore += 1;
    }
    let result = document.getElementById('result');
    result.innerHTML = x;
    }


function scoreCheck() {
    document.getElementById('score').innerHTML = 'Current score is Player: ' + playerScore + ' vs Computer: ' + computerScore;

    if (playerScore === 5) {
        document.getElementById('winner').innerHTML = 'Player is the winner';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        document.getElementById('winner').innerHTML = 'Computer is the winner';
        playerScore = 0;
        computerScore = 0;
    }
    
}



