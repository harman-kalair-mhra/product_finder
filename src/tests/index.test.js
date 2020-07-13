let inputHandler = require("../index.js");

describe("Product finder", function () {
  test("Test to check User input mathes the Licence numbers- return true", function () {
    expect(inputHandler("PL123456")).toBe(true);
  });

  test("Test to check User input mathes the Licence numbers - return false", function () {
    expect(inputHandler("PL137283792")).toBe(false);
  });
});
