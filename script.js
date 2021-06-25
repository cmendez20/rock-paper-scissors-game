
const computerPlay = function () {
  // Generates a random number from 0 - 2
  let randChoice = Math.floor(Math.random() * 3);

  // Generates Computer Play from an array of possible choices using randNum as an index
  const computerChoices = ['rock', 'paper', 'scissors'];
  // console.log(computerChoices[randChoice]);
  return computerChoices[randChoice];
};

const playRound = function(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  
  console.log(playerSelectionLowerCase);
  console.log(computerSelection);
  if (playerSelectionLowerCase === computerSelection) {
    return 'It\'s a tie! Try again.';   
  } else if (playerSelectionLowerCase === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock.';
  } else if (playerSelectionLowerCase === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors.';
  } else if (playerSelectionLowerCase === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats Paper.';
  } else {
    return `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`;
  }
}

const game = function() {
  
}

// computer's selection;
const computerSelection = computerPlay();
const playerSelection = 'rock';

// Play a game of rock, paper, scissors
console.log(playRound(playerSelection, computerSelection));