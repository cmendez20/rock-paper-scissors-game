const computerPlay = function () {
  // Generates a random number from 0 - 2
  let randChoice = Math.floor(Math.random() * 3);

  // Generates Computer Play from an array of possible choices using randNum as an index
  const computerChoices = ['rock', 'paper', 'scissors'];
  // console.log(computerChoices[randChoice]);
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

const game = function () {
  let playerWins = 0;
  let computerWins = 0;
  let draw = 0;
  let computerSelection;
  let playerSelection;
  const buttons = document.querySelectorAll('button');

  computerSelection = computerPlay();
  buttons.forEach(button => button.addEventListener('click', button => (playerSelection = button.target.textContent)));

  buttons.forEach(button => button.addEventListener('click', playRound));

  // console.log(i);
  console.log({ playerSelection });
  console.log({ computerSelection });
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

const checkWinner = function (playerWins, computerWins) {
  if (playerWins > computerWins) {
    return 'You win!';
  } else if (computerWins > playerWins) {
    return 'You lose! The computer won :(';
  } else {
    return "It's a tie, no one wins";
  }
};

// computer's selection;
// const computerSelection = computerPlay();
// const playerSelection = "rock";

// Play 5 rounds of rock, paper, scissors
game();
