let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(answer, finder) {
  if (answer === "Q") {
    rl.close();
    return null;
  }

  let result = finder.getProduct(answer);
  if (result) {
    console.log(result.toString());
  } else {
    console.log("Incorrect number", answer);
  }
  getInput(finder);
}
function getInput(finder) {
  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    (answer) => inputHandler(answer, finder)
  );
}

module.exports = getInput;
