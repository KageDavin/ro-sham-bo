// #### getComputerChoice ####
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




// #### getHumanChoice ####
// use Prompt for input


function getHumanChoice() {
  let showWeapons;

 while (true) {
    showWeapons = prompt("Choose your weapon: 1-ROCK, 2-SCISSORS, or 3-PAPER.");

    if (showWeapons === null) {
      console.log("Human did not select a weapon. No Battle");
      return null; 
    }

    const selectWeapon = showWeapons * 1;

    if (selectWeapon === 1 || selectWeapon === 2 || selectWeapon === 3) {
     return selectWeapon;
    } else {
      alert("Choose a valid weapon: 1-ROCK, 2-SCISSORS, 3-PAPER");
    }
  }
}


function getWeapon(weaponChoice) {
  switch (weaponChoice) {
    case 1:
      return 'ROCK';
    case 2:
      return 'SCISSORS';
    case 3:
      return 'PAPER';
    default:
      return null;
  }
}


const giveWeapon = getHumanChoice();

if (giveWeapon !== null) {
  const humanChoice = getWeapon(giveWeapon);
  console.log(`The user chose: ${humanChoice}`);
  
}

// Computer vs Human Comparison

function playRound(humanChoice, computerChoice) {
  

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
