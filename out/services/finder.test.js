"use strict";
exports.__esModule = true;
var finder_1 = require("./finder");
var product_1 = require("../models/product");
function setUp() {
    var mockProduct = new product_1["default"]("PL1000", "Test-name", "Test-dose", "Test-substance", "Test-url");
    return function () {
        return { PL1000: mockProduct };
    };
}
describe("Product finder Test", function () {
    test("return product when product is exists", function () {
        var mockDataSource = setUp();
        var finder = new finder_1["default"](mockDataSource);
        var result = finder.getProduct("PL1000");
        expect(result).toBeInstanceOf(product_1["default"]);
    });
    test("check if product name matches", function () {
        var expected = "Test-name";
        var mockDataSource = setUp(expected);
        var finder = new finder_1["default"](mockDataSource);
        var result = finder.getProduct("PL1000").name;
        expect(result).toBe(expected);
    });
});
//# sourceMappingURL=finder.test.js.map