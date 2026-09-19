// create a function getComputerChoice
// that returns a random choice of "rock", "paper" or "scissors" string
// 1. how can we store these string to get one of them randomly? We can us Array!
// Hint: I can use Math.random()

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const QUIT = 'quit';

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const btnsWrapper = document.querySelector('.btns-wrapper');

const btnsScorePlayer = document.querySelector('.btns-score-player');
const btnsScoreComputer = document.querySelector('.btns-score-computer');

const winnerResults = document.querySelector('.winner-results');

let playerScore = 0;
let computerScore = 0;
let tempResultContainer;

function getComputerChoice() {
  return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)];
}

function playRound(userInput, computerInput) {

  if (playerScore >= 5 || computerScore >= 5) {
    let winner = null;
    if (playerScore > computerScore) {
      winner = "You are the winner of this game! Congrats!";
    } else {
      winner = "Computer has won this battle!";
    }
    winnerResults.innerText = winner;
    return;
  }

  if (tempResultContainer) {
    btnsWrapper.removeChild(tempResultContainer);
  }

  // create a result div
  const resultContainer = document.createElement('div');

  // create result text
  const resultText = document.createElement('p');
  const resultComparisonText = document.createElement('p');
  resultComparisonText.style.paddingTop = "10px";

  // add styles for result div
  resultContainer.style.backgroundColor = "#e9ddcd";
  resultContainer.style.padding = "40px";
  resultContainer.style.borderRadius = "10px";
  resultContainer.style.border = "1px solid #c2bdb7";
  resultContainer.style.textAlign = "center";
  resultContainer.style.fontSize = "18px";
  resultContainer.style.marginTop = "20px";

  if (
    (userInput === ROCK && computerInput === PAPER) ||
    (userInput === PAPER && computerInput === SCISSORS) ||
    (userInput === SCISSORS && computerInput === ROCK)
  ) {
    resultText.textContent = 'Computer wins!';
    computerScore++;
  } else if (
    (userInput === ROCK && computerInput === SCISSORS) ||
    (userInput === PAPER && computerInput === ROCK) ||
    (userInput === SCISSORS && computerInput === PAPER) 
  ) {
    resultText.textContent = 'You are the winner!';
    playerScore++;
  } else {
    resultText.textContent = "It's a tie!";
  }

  resultComparisonText.innerText = `Player chose: ${userInput}\nComputer chose: ${computerInput}`;

  btnsScorePlayer.textContent = `${playerScore}`;
  btnsScoreComputer.textContent = `${computerScore}`;

  resultContainer.appendChild(resultText);
  resultContainer.appendChild(resultComparisonText);
  btnsWrapper.appendChild(resultContainer);

  tempResultContainer = resultContainer;
}

function main() {
  rockButton.addEventListener('click', () => playRound(ROCK, getComputerChoice()));
  paperButton.addEventListener('click', () => playRound(PAPER, getComputerChoice()));
  scissorsButton.addEventListener('click', () => playRound(SCISSORS, getComputerChoice()));   
}

main()
