"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var product_1 = __importDefault(require("../models/product"));
function getData() {
    var itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
    var product1 = new product_1["default"]("PL001730050", "Ibugel gel", "10mg", "Ibuprofen", "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca");
    var product2 = new product_1["default"]("PL001655013", "Anadin Extra", "5mg", "Paracetamol", "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970");
    var product3 = new product_1["default"]("PL136060206", "Tadalafil 10mg film-coated tablets", "10mg", "Tadafil", "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077");
    var product4 = new product_1["default"]("PL252980158", "Nabilone 1mg capsules", "1mg", "Nabilone", "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4");
    var product5 = new product_1["default"]("PL201170079", "Ramipril 2.5mg tablets ", "2.5mg", "Ramipril", "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039");
    var products = [product1, product2, product3, product4, product5];
    var productObjects = {};
    for (var i = 0; i < products.length; i++) {
        var Product_1 = products[i];
        productObjects[Product_1.plNumber.toUpperCase()] = Product_1; // key and value, key being the Pl number and value = product1 etc.
    }
    return productObjects;
}
exports["default"] = getData;
//# sourceMappingURL=data-provider.js.map