"use strict";
exports.__esModule = true;
var product_1 = require("../models/product");
describe("Product class test", function () {
    test("classes created", function () {
        var product1 = new product_1["default"]("plNumber", "name", "dose", "substance", "url");
        expect(product1.plNumber).toBe("plNumber");
    });
    test("classes created", function () {
        var product1 = new product_1["default"]("plNumber", "name", "dose", "substance", "url");
        expect(product1.plNumber).toBe("plNumber");
    });
    test("classes created", function () {
        console.log = jest.fn();
        var product1 = new product_1["default"]("plNumber", "name", "dose", "substance", "url");
        var expectresult = "\nPL Number: plNumber\nName: name\nDose: dose\nSubstance: substance\nURL: url\n";
        expect(product1.toString()).toBe(expectresult);
    });
});
//# sourceMappingURL=product.test.js.map