let inputHandler = require("../index.js");

describe("Product finder", function () {
  test("Test to check User input mathes the Licence numbers", function () {
    let userInput = inputHandler("PL123456");
    expect(userInput).toEqual("PL123456");
  });
});
