
const computerPlay = function () {
  // Generates a random number from 0 - 2
  let randChoice = Math.floor(Math.random() * 3);

  // Generates Computer Play from an array of possible choices using randNum as an index
  const computerChoices = ['rock', 'paper', 'scissors'];
  // console.log(computerChoices[randChoice]);
  return computerChoices[randChoice];
};

// computerPlay();
console.log(computerPlay());