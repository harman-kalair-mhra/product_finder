let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
let { getProduct } = require("./product-finder.js");
function inputHandler(answer) {
  if (answer === "Q") {
    rl.close();
    return null;
  }
  let result = getProduct(answer);
  if (result) {
    console.log(result.toString());
  } else {
    console.log("Incorrect number");
  }

  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    inputHandler
  );
}
function startUp() {
  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    inputHandler
  );
}
startUp();
