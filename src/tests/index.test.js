var mocha = require("mocha");
var expect = mocha.expect;

const rl = require("../index.js");

describe("Product finder", function () {
  it("Test to check User input", function () {
    var userInput = new rl("PL123456");

    expect(userInput.rl).to.equal("PL123456");
  });
});
