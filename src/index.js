let readline = require("readline");
let getProductsData = require("./product-provider");
let rl = readline.createInterface(process.stdin, process.stdout);

function getProduct(product) {
  let productObjects = getProductsData();
  return productObjects[product];
}

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

rl.question(
  "Please enter your Medical Licence Number OR press Q to Quit: ",
  inputHandler
);

exports.getProduct = getProduct;
