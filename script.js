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

const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('.results');
const displayComputerWins = document.querySelector('.computerWins');
const displayPlayerWins = document.querySelector('.playerWins');

const game = function () {
  let playerWins = 0;
  let computerWins = 0;
  let draw = 0;
  let computerSelection;
  let playerSelection;

  // buttons.forEach(button => button.addEventListener('click', button => (playerSelection = button.target.textContent)));
  computerSelection = computerPlay();
  console.log(computerSelection);

  buttons.forEach(button =>
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
        (playerSelectionLowerCase === 'rock' && computerSelection === 'paper') ||
        (playerSelectionLowerCase === 'scissors' && computerSelection === 'rock') ||
        (playerSelectionLowerCase === 'paper' && computerSelection === 'scissors')
      ) {
        computerWins++;
        resultsDiv.textContent += `You lose! ${computerSelection} beats ${playerSelection}.`;
        displayComputerWins.textContent = `Computer's Score: ${computerWins}`;
        checkWinner(computerWins, playerWins);
      } else if (
        (computerSelection === 'rock' && playerSelectionLowerCase === 'paper') ||
        (computerSelection === 'scissors' && playerSelectionLowerCase === 'rock') ||
        (computerSelection === 'paper' && playerSelectionLowerCase === 'scissors')
      ) {
        playerWins++;
        resultsDiv.textContent += `You win! ${playerSelection} beats ${computerSelection}.`;
        displayPlayerWins.textContent = `Player's Score: ${playerWins}`;
        checkWinner(computerWins, playerWins);
      } else {
        draw++;
        resultsDiv.textContent += "It's a tie!";
      }
    })
  );

  // console.log({ playerSelection });
  // console.log({ computerSelection });
  // if (playRound(playerSelection, computerSelection) === 'computer') {
  //   computerWins++;
  //   console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  // } else if (playRound(playerSelection, computerSelection) === 'player') {
  //   playerWins++;
  //   console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
  // } else {
  //   draw++;
  //   console.log("It's a tie!");
  // }

  console.log(playerWins, computerWins, draw);
  console.log(checkWinner(playerWins, computerWins));
};

const checkWinner = (computerScore, playerScore) => {
  if (computerScore > playerScore && computerScore === 5) {
    resultsDiv.textContent = 'Game over! The computer won :(';
  } else if (playerScore > computerScore && playerScore === 5) {
    resultsDiv.textContent = 'You won!';
  }
};

// function (score) {
//   if (playerWins > computerWins) {
//     return 'You win!';
//   } else if (computerWins > playerWins) {
//     return 'You lose! The computer won :(';
//   } else {
//     return "It's a tie, no one wins";
//   }
// };

// computer's selection;
// const computerSelection = computerPlay();
// const playerSelection = "rock";

// Play 5 rounds of rock, paper, scissors
game();
