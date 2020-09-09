"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var product_1 = __importDefault(require("../models/product"));
function getData() {
    var itemNames = [
        "PL001730050",
        "PL001655013",
        "PL136060206",
        "PL252980158",
        "PL201170079",
    ];
    var product1 = new product_1["default"]({
        plNumber: "PL001730050",
        name: "Ibugel gel",
        dose: "10mg",
        substance: "Ibuprofen",
        url: "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca"
    });
    product1.save();
    var product2 = new product_1["default"]({
        plNumber: "PL001655013",
        name: "Anadin Extra",
        dose: "5mg",
        substance: "Paracetamol",
        url: "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970"
    });
    product2.save();
    var product3 = new product_1["default"]({
        plNumber: "PL136060206",
        name: "Tadalafil 10mg film-coated tablets",
        dose: "10mg",
        substance: "Tadafil",
        url: "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077"
    });
    product3.save();
    var product4 = new product_1["default"]({
        plNumber: "PL252980158",
        name: "Nabilone 1mg capsules",
        dose: "1mg",
        substance: "Nabilone",
        url: "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4"
    });
    product4.save();
    var product5 = new product_1["default"]({
        plNumber: "PL201170079",
        name: "Ramipril 2.5mg tablets ",
        dose: "2.5mg",
        substance: "Ramipril",
        url: "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039"
    });
    product5.save();
    var products = [];
    var productObjects = {};
    for (var i = 0; i < products.length; i++) {
        var Product_1 = products[i];
        productObjects[Product_1.plNumber.toUpperCase()] = Product_1; // key and value, key being the Pl number and value = product1 etc.
    }
    return productObjects;
}
exports["default"] = getData;
//# sourceMappingURL=data-provider.js.map