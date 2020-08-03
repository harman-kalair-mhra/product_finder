let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
let ProductFinder = require("./services/finder.js");
let getData = require("./repositories/data-provider");
function inputHandler(answer, finder) {
  if (answer === "Q") {
    rl.close();
    return null;
  }

  let result = finder.getProduct(answer);
  if (result) {
    console.log(result.toString());
  } else {
    console.log("Incorrect number");
  }

  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    inputHandler(finder)
  );
}
function startUp() {
  let finder = new ProductFinder(getData);
  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    inputHandler(finder)
  );
}
startUp();
