// getComputerChoice
// Use Math.random() for choice of rock, scissors, paper
const min = 10;
const max = 40;

function getComputerChoice() {
  const randChoice = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Log random number to compare to output
  console.log('Random number: ' + randChoice);

  if (randChoice >= 30 && randChoice < 40) {
    return 'PAPER';
  } else if (randChoice > 19 && randChoice <= 29) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

const compChoice = getComputerChoice();
console.log('Computer chose: ' + compChoice);
