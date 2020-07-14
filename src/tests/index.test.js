let inputHandler = require("../index.js");
const { interfaces } = require("jest");

describe("Product finder", function () {
  test("Test to check User input matches the Licence numbers- return true", function () {
    expect(inputHandler("PL123456")).toBe(true);
  });

  test("Test to check User input matches the Licence numbers - return false", function () {
    expect(inputHandler("PL137283792")).toBe(false);
  });

  test("Check Item names in an array", () => {
    let itemNames = [
      "PL123456",
      "PL513872",
      "PL999999",
      "PL654321",
      "PL818181",
    ];
    for (let i = 0; i < itemNames.length; i++) {
      expect(inputHandler(itemNames[i])).toBe(true);
    }
  });
});
