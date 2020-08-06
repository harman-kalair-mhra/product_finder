"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
function inputHandler(answer, finder) {
    if (answer === "Q") {
        rl.close();
        return null;
    }
    var result = finder.getProduct(answer);
    if (result) {
        console.log(result.toString());
    }
    else {
        console.log("Incorrect number", answer);
    }
    getInput(finder);
}
function getInput(finder) {
    rl.question("Please enter your Medical Licence Number OR press Q to Quit: ", function (answer) { return inputHandler(answer, finder); });
}
exports["default"] = getInput;
//# sourceMappingURL=app.js.map