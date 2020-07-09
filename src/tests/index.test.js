const inputHandler = require("../index.js");

describe("Product finder", function () {
  test("Test to check User input", function () {
    let userInput = inputHandler("PL123456");
    expect(userInput).toEqual("PL123456");
  });
});
