const computerPlay = function () {
  // Generates a random number from 0 - 2
  let randChoice = Math.floor(Math.random() * 3);

  // Generates Computer Play from an array of possible choices using randNum as an index
  const computerChoices = ['rock', 'paper', 'scissors'];
  console.log(computerChoices[randChoice]);
  return computerChoices[randChoice];
};

const playRound = function (playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  const playerSelectionLowerCase = playerSelection.toLowerCase();

  // console.log(playerSelectionLowerCase);
  // console.log(computerSelection);
  if (
    (playerSelectionLowerCase === 'rock' && computerSelection === 'paper') ||
    (playerSelectionLowerCase === 'scissors' && computerSelection === 'rock') ||
    (playerSelectionLowerCase === 'paper' && computerSelection === 'scissors')
  ) {
    return 'computer';
  } else if (
    (computerSelection === 'rock' && playerSelectionLowerCase === 'paper') ||
    (computerSelection === 'scissors' && playerSelectionLowerCase === 'rock') ||
    (computerSelection === 'paper' && playerSelectionLowerCase === 'scissors')
  ) {
    return 'player';
  }
};

const choices = document.querySelectorAll('.choices');
const resultsDiv = document.querySelector('.results');
const displayComputerWins = document.querySelector('.computerWins');
const displayPlayerWins = document.querySelector('.playerWins');
const restartBtn = document.querySelector('.restart');
let playerWins = 0;
let computerWins = 0;
let draw = 0;
let computerSelection;
let playerSelection;

const game = function () {
  // computerSelection = computerPlay();
  // console.log(computerSelection);

  choices.forEach(button =>
    button.addEventListener('click', function (e) {
      computerSelection = computerPlay();
      resultsDiv.textContent = '';
      playerSelection = this.textContent;
      // console.log(this.textContent);
      console.log(playerSelection);
      console.log(computerSelection);
      const playerSelectionLowerCase = playerSelection.toLowerCase();

      // console.log(playerSelectionLowerCase);
      // console.log(computerSelection);
      if (
        (playerSelectionLowerCase === 'rock' &&
          computerSelection === 'paper') ||
        (playerSelectionLowerCase === 'scissors' &&
          computerSelection === 'rock') ||
        (playerSelectionLowerCase === 'paper' &&
          computerSelection === 'scissors')
      ) {
        computerWins++;
        computerSelection = computerSelection.replace(
          computerSelection[0],
          computerSelection[0].toUpperCase()
        );
        resultsDiv.textContent += `You lose! ${computerSelection} beats ${playerSelection}.`;
        displayComputerWins.textContent = `Computer's Score: ${computerWins}`;
        checkWinner(computerWins, playerWins);
      } else if (
        (computerSelection === 'rock' &&
          playerSelectionLowerCase === 'paper') ||
        (computerSelection === 'scissors' &&
          playerSelectionLowerCase === 'rock') ||
        (computerSelection === 'paper' &&
          playerSelectionLowerCase === 'scissors')
      ) {
        playerWins++;
        resultsDiv.textContent += `You win! ${playerSelection} beats ${computerSelection}.`;
        displayPlayerWins.textContent = `Player's Score: ${playerWins}`;
        checkWinner(computerWins, playerWins);
      } else {
        draw++;
        resultsDiv.textContent += "It's a tie!";
      }
      restartBtn.addEventListener('click', restartGame);
    })
  );

  // console.log(playerWins, computerWins, draw);
  // console.log(checkWinner(playerWins, computerWins));
};

const checkWinner = (computerScore, playerScore) => {
  if (computerScore > playerScore && computerScore === 5) {
    resultsDiv.textContent = 'Game over! The computer won :(';
    restartBtn.style.opacity = 1;
  } else if (playerScore > computerScore && playerScore === 5) {
    resultsDiv.textContent = 'Congrats, you won! 🎆🎇🎆';
    restartBtn.style.opacity = 1;
  }
};

const restartGame = function () {
  resultsDiv.textContent = '';
  displayPlayerWins.textContent = `Player's Score: 0`;
  displayComputerWins.textContent = `Computer's Score: 0`;
  playerWins = 0;
  computerWins = 0;
  restartBtn.style.opacity = 0;
};

// Play 5 rounds of rock, paper, scissors
game();
