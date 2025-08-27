// #### getComputerChoice ####
// Use Math.random() for choice of rock, scissors, paper
const min = 10;
const max = 40;



function getComputerChoice() {
  const randChoice = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Log random number to compare to output
  console.log('Random number: ' + randChoice);

  if (randChoice >= 30 && randChoice < 40) {
    return 'SCISSORS';
  } else if (randChoice > 19 && randChoice <= 29) {
    return 'PAPER';
  } else {
    return 'ROCK';
  }
}
let computerChoice = null;

computerChoice = getComputerChoice();
console.log('Computer chose: ' + computerChoice);




// #### getHumanChoice ####
// use Prompt for input


function getHumanChoice() {
  let selectWeapon;

 while (true) {
    selectWeapon = prompt("Choose your weapon: 1-ROCK, 2-PAPER, or 3-SCISSORS.");

    if (selectWeapon === null) {
      console.log("Human did not select a weapon --> No Battle");
      return null; 
    }

    const weaponChoice = selectWeapon * 1;

    if (weaponChoice === 1 || weaponChoice === 2 || weaponChoice === 3) {
     return weaponChoice;
    } else {
      alert("Choose a valid weapon: 1-ROCK, 2-PAPER, 3-SCISSORS");
    }
  }
}


function getWeaponName(weaponNumber) {
  switch (weaponNumber) {
    case 1:
      return 'ROCK';
    case 2:
      return 'PAPER';
    case 3:
      return 'SCISSORS';
    default:
      return null;
  }
}


const weaponNumber = getHumanChoice();
let humanChoice = null;

if (weaponNumber !== null) {
  humanChoice = getWeaponName(weaponNumber);
  console.log(`The user chose: ${humanChoice}`);

  
}

// Computer vs Human Comparison

function playRound(humanChoice, computerChoice) {
    const humanLower = humanChoice.toLowerCase();
    const computerLower = computerChoice.toLowerCase();

    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);

    if (humanLower === computerLower) {
        console.log("It's a tie!");
    } else if (
        (humanLower === 'rock' && computerLower === 'scissors') ||
        (humanLower === 'scissors' && computerLower === 'paper') ||
        (humanLower === 'paper' && computerLower === 'rock')
    ) {
        console.log("Human wins!");
    } else {
        console.log("Human loses!");
    }
}

playRound(humanChoice, computerChoice);

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

