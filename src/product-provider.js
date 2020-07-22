const Product = require("./models/product.js");
function getProductsData() {
  let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
  const product1 = new Product("PL123456", "name", "dose", "substance", "url");
  const product2 = new Product("PL513872", "name", "dose", "substance", "url");
  const product3 = new Product("PL999999", "name", "dose", "substance", "url");
  const product4 = new Product("PL654321", "name", "dose", "substance", "url");
  const product5 = new Product("PL818181", "name", "dose", "substance", "url");
  const products = [product1, product2, product3, product4, product5];

  let productObjects = {};
  for (let i = 0; i < products.length; i++) {
    let Product = products[i];
    productObjects[Product.plNumber] = Product; // key and value, key being the Pl number and value = product1 etc.
  }
  return productObjects;
}

module.exports = getProductsData;
