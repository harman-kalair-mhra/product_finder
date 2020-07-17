let readline = require("readline");
const Product = require("./models/product.js");
let rl = readline.createInterface(process.stdin, process.stdout);

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
product1 = new Product("PL123456", "name", "dose", "substance", "url");
product2 = new Product("PL513872", "name", "dose", "substance", "url");
product3 = new Product("PL999999", "name", "dose", "substance", "url");
product4 = new Product("PL654321", "name", "dose", "substance", "url");
product5 = new Product("PL818181", "name", "dose", "substance", "url");
let products = [product1, product2, product3, product4, product5];

let productObjects = {};
for (let i = 0; i < products.length; i++) {
  let Product = products[i];
  productObjects[Product.plNumber] = Product;
}

//let productfound = productObjects["PL123456"];
//console.log(productfound);

function getProduct(product) {
  return productObjects[product];
}

function inputHandler(answer) {
  let result = getProduct(answer);
  if (result) {
    console.log("Your Licence number has been found " + answer);
    return true;
  } else {
    console.log("Incorrect number");
    return false;
  }
}

rl.question("Please enter your Medical Licence Number: ", inputHandler);

exports.isProductPresent = isProductPresent;
