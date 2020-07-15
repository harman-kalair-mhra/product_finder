const Product = require("./product.js");

describe("Product class test", function () {
  test("classes created", () => {
    let product1 = new Product("plNumber", "name", "dose", "substance", "url");
    expect(product1.plNumber).toBe("plNumber");
  });

  test("classes created", () => {
    let product1 = new Product("plNumber", "name", "dose", "substance", "url");
    expect(product1.plNumber).toBe("plNumber");
  });
});
