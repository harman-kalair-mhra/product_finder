var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];

//TODO List: Validation

// Enable User Input
// Check the itemsNames to see if it contains user input
// Return a Boolean

function inputHandler(answer) {
  let result = itemNames.includes(answer);
  if (result) {
    console.log("Your Licence number has been found " + answer);
  } else {
    console.log("Incorrect number");
  }
}

rl.question("Please enter your Medical Licence Number: ", inputHandler);
