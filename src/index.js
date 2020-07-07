var readline = require("readline")
var rl = readline.createInterface(process.stdin, process.stdout)

let itemNames = ["PL123456", "PL513872","PL999999", "PL654321", "PL818181"]

//TODO List: Validation

// Enable User Input
// Check the itemsNames to see if it contains user input
// Return a Boolean

rl.question("Please enter you Medical Licence Number: ", function(answer){
    console.log(answer)
})