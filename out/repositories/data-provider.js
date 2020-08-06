"use strict";
exports.__esModule = true;
var product_1 = require("../models/product");
function getData() {
    var itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
    var product1 = new product_1["default"]("PL123456", "name", "dose", "substance", "url");
    var product2 = new product_1["default"]("PL513872", "name", "dose", "substance", "url");
    var product3 = new product_1["default"]("PL999999", "name", "dose", "substance", "url");
    var product4 = new product_1["default"]("PL654321", "name", "dose", "substance", "url");
    var product5 = new product_1["default"]("PL818181", "name", "dose", "substance", "url");
    var products = [product1, product2, product3, product4, product5];
    var productObjects = {};
    for (var i = 0; i < products.length; i++) {
        var Product_1 = products[i];
        productObjects[Product_1.plNumber] = Product_1; // key and value, key being the Pl number and value = product1 etc.
    }
    return productObjects;
}
exports["default"] = getData;
//# sourceMappingURL=data-provider.js.map