const { getProduct } = require("../product-finder.js");
const Product = require("../models/product.js");

describe("Product finder", () => {
  test("return true if the product is present", () => {
    expect(getProduct("PL123456")).toBeInstanceOf(Product);
  });
  /*test("return false if the product isn't present", () => {
    expect(getProduct("PL198789")).toBeInstanceOf(false);
  }); */
});
