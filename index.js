const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve) => rl.question(questionText, resolve));
}

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
  let max = 100;
  let min = 1;
  let guess;
  let tries = 0;

  await ask("Think of a number between 1 and 100 and press Enter when ready...\n");

  while (true) {
    guess = Math.floor((min + max) / 2);
    tries++;
    let response = await ask(`Is your number ${guess}? (Y/N): `);

    if (response.toLowerCase() === "y" || response.toLowerCase() === "yes") {
      console.log(`Yay! I guessed your number ${guess} in ${tries} tries!`);
      break;
    }

    let highLow = await ask("Is it higher (H) or lower (L)? ");
    if (highLow.toLowerCase() === "h") {
      min = guess + 1;
    } else if (highLow.toLowerCase() === "l") {
      max = guess - 1;
    } else {
      console.log("Please enter 'H' for higher or 'L' for lower.");
    }

    if (min > max) {
      console.log("Hmm, something doesn't add up. Are you cheating? 😜");
      break;
    }
  }

  rl.close();
}

start();
