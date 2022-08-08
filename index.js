const { networkInterfaces } = require("os");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

//start by asking participant to play a game
async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  //ask for the secret number
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  //particiapant enters number
  console.log("You entered: " + secretNumber + "\nLet's play!");
  //computer guesses random generated response:
  let firstGuess = Math.floor(Math.random() * 101);
  console.log("Is your number " + firstGuess + "?");
  //computer waits for response and askes y/n
  let yesNo = await ask("Yes or No?\n");
  ß;
  //capture yes or no response

  //!no is not working? (YES IS WORKING?)
  function resp1() {
    const answer = "y";
    if (answer === "y") {
      console.log("Great!\nI guessed your number!");
      //work on no response ITS NOT WORKING YET
    } else {
      console.log(
        "OK, no biggie, is your number higher or lower than " +
          firstGuess +
          " ?"
      );
    }
  }
  resp1();

  //leave this at the very bottom:
  process.exit();
}

/* Your number is between //display the two outer number range of the remaining options

Is it… //display half of the displayed number from the options from above

Yay! Your number is ! Good Game!
I guessed in “” tries!

Would you like to play again? (Y)es or (N)o?
*/
