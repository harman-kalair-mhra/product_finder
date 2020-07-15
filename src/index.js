var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];

function isProductPresent(product) {
  return itemNames.includes(product);
}

function inputHandler(answer) {
  let result = itemNames.includes(answer);
  if (result) {
    console.log("Your Licence number has been found " + answer);
    return true;
  } else {
    console.log("Incorrect number");
    return false;
  }
}

rl.question("Please enter your Medical Licence Number: ", inputHandler);

exports.inputHandler = inputHandler;
exports.isProductPresent = isProductPresent;
