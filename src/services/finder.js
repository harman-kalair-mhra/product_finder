let getProductsData = require("../repositories/data-provider");

function getProduct(product) {
  let productObjects = getProductsData();
  return productObjects[product];
}
exports.getProduct = getProduct; //- when using this surround this with curley brackets during import {}
//module.exports = getProduct; - exporting a single function
