var ProductFinder = require("./finder.js");
var Product = require("../models/product.js");
function setUp() {
    var mockProduct = new Product("PL1000", "Test-name", "Test-dose", "Test-substance", "Test-url");
    return function () {
        return { PL1000: mockProduct };
    };
}
describe("Product finder Test", function () {
    test("return product when product is exists", function () {
        var mockDataSource = setUp();
        var finder = new ProductFinder(mockDataSource);
        var result = finder.getProduct("PL1000");
        expect(result).toBeInstanceOf(Product);
    });
    test("check if product name matches", function () {
        var expected = "Test-name";
        var mockDataSource = setUp(expected);
        var finder = new ProductFinder(mockDataSource);
        var result = finder.getProduct("PL1000").name;
        expect(result).toBe(expected);
    });
});
//# sourceMappingURL=finder.test.js.map