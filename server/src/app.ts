import readline = require("readline");
import ProductFinder from "./services/finder";
let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(answer: string, finder: ProductFinder): void {
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
export default function getInput(finder: ProductFinder): void {
  rl.question(
    "Please enter your Medical Licence Number OR press Q to Quit: ",
    (answer) => inputHandler(answer, finder)
  );
}
