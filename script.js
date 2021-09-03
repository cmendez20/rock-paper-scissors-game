// Selecting our elements from the DOM
const choices = document.querySelector('.choices');
const resultsDiv = document.querySelector('.results');
const displayComputerWins = document.querySelector('.computerWins');
const displayPlayerWins = document.querySelector('.playerWins');
const restartBtn = document.querySelector('.restart');

// Global Variables
let playerWins = 0;
let computerWins = 0;
let playing = true;
let computerSelection, playerSelection;

const computerPlay = function () {
  // Generates a random number from 0 - 2
  let randChoice = Math.floor(Math.random() * 3);

  // Generates Computer Play from an array of possible choices using randNum as an index
  const computerChoices = ['rock', 'paper', 'scissors'];
  // console.log(computerChoices[randChoice]);
  return computerChoices[randChoice];
};

const playRound = function (e) {
  computerSelection = computerPlay();
  playerSelection = e.target.textContent;
  console.log(`Player's choice: ${playerSelection}`);
  console.log(`Computer's choice: ${computerSelection}`);
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  if (playing) {
    if (
      (playerSelectionLowerCase === 'rock' && computerSelection === 'paper') ||
      (playerSelectionLowerCase === 'scissors' &&
        computerSelection === 'rock') ||
      (playerSelectionLowerCase === 'paper' && computerSelection === 'scissors')
    ) {
      computerWins++;
      computerSelection = computerSelection.replace(
        computerSelection[0],
        computerSelection[0].toUpperCase()
      );
      resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
      displayComputerWins.textContent = `Computer's Score: ${computerWins}`;
      checkWinner(computerWins, playerWins);
    } else if (
      (computerSelection === 'rock' && playerSelectionLowerCase === 'paper') ||
      (computerSelection === 'scissors' &&
        playerSelectionLowerCase === 'rock') ||
      (computerSelection === 'paper' && playerSelectionLowerCase === 'scissors')
    ) {
      playerWins++;
      resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
      displayPlayerWins.textContent = `Player's Score: ${playerWins}`;
      checkWinner(computerWins, playerWins);
    } else {
      resultsDiv.textContent = "It's a tie!";
    }
  }
};

const checkWinner = (computerScore, playerScore) => {
  if (computerScore > playerScore && computerScore === 5) {
    resultsDiv.textContent = 'Game over! The computer won :(';
  } else if (playerScore > computerScore && playerScore === 5) {
    resultsDiv.textContent = 'Congrats, you won! 🎆🎇🎆';
  }

  if (playerScore === 5 || computerScore === 5) {
    restartBtn.style.opacity = 1;
    playing = false;
  }
};

const restartGame = function () {
  resultsDiv.textContent = '';
  displayPlayerWins.textContent = `Player's Score: 0`;
  displayComputerWins.textContent = `Computer's Score: 0`;
  playerWins = 0;
  computerWins = 0;
  restartBtn.style.opacity = 0;
  playing = true;
};

const game = function () {
  choices.addEventListener('click', playRound);
  restartBtn.addEventListener('click', restartGame);
};

// Play 5 rounds of rock, paper, scissors
game();
