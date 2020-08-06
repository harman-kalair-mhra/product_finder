let ProductFinder = require("./services/finder.js");
let getData = require("./repositories/data-provider");
let getInput = require("./app.js");

function startUp() {
  let finder = new ProductFinder(getData);
  getInput(finder);
}
startUp();
