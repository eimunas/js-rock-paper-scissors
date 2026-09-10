// create a function getComputerChoice
// that returns a random choice of "rock", "paper" or "scissors" string
// 1. how can we store these string to get one of them randomly? We can us Array!
// Hint: I can use Math.random()

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const QUIT = 'quit';

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)];
}

function getHumanChoise() {
  const input = prompt("Choose: rock, paper or scissors!");
  if (input === ROCK) return ROCK;
  if (input === PAPER) return PAPER;
  if (input === SCISSORS) return SCISSORS;
  if (input === QUIT) return QUIT;

  return 'unknown option';
}

function playRound(userInput, computerInput) {
  if (
    (userInput === ROCK && computerInput === PAPER) ||
    (userInput === PAPER && computerInput === SCISSORS) ||
    (userInput === SCISSORS && computerInput === ROCK)
  ) {
    alert('Computer wins!');
    computerScore++;
  } else if (
    (userInput === ROCK && computerInput === SCISSORS) ||
    (userInput === PAPER && computerInput === ROCK) ||
    (userInput === SCISSORS && computerInput === PAPER) 
  ) {
    alert('You are the winner!');
    playerScore++;
  } else if (userInput === 'unknown option') {
    alert('Invalid option!')
  }
  else {
    alert("It's a tie!");
  }

  console.log("Your choice: ", userInput, ", Current score: ", playerScore);
  console.log("Computer choice: ", computerInput, ", Current score: ", computerScore);
}

function main() {
  let running = true;

  while (running) {
    let userInput = getHumanChoise();
    let computerInput = getComputerChoice();

    if (userInput === QUIT) running = false;
    playRound(userInput, computerInput);    
  }
}

main()
