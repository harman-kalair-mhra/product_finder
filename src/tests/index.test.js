const { inputHandler, isProductPresent } = require("../index.js");

describe("Product finder", function () {
  test("return true if the product is present", function () {
    expect(isProductPresent("PL123456")).toBe(true);
  });
  test("return false if the product isn't present", function () {
    expect(isProductPresent("PL198789")).toBe(false);
  });

  test("Test to check User input matches the Licence numbers- return true", function () {
    expect(isProductPresent("PL123456")).toBe(true);
  });

  test("Test to check User input matches the Licence numbers - return false", function () {
    expect(isProductPresent("PL137283792")).toBe(false);
  });
});
