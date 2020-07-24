let { getProduct } = require("../services/finder.js");
let getProductsData = require("../repositories/data-provider.js");

jest.mock("../repositories/data-provider"); // mock testing

const Product = require("../models/product.js");

function setUp() {
  // function containing dummy data to test
  getProductsData.mockImplementation(() => {
    let mockProduct = new Product(
      "PL1000",
      "Test-name",
      "Test-dose",
      "Test-substance",
      "Test-url"
    );
    return { PL1000: mockProduct }; // Key is PL1000 and Value is product
  });
}

describe("Product finder Test", () => {
  beforeEach(() => {
    //runs setUp function before each test.
    console.log("Setting Up");
    setUp();
  });
  afterEach(() => {
    //runs after each test.
    console.log("Cleaning up");
  });

  test("return true if the product is present", () => {
    let result = getProduct("PL1000");
    expect(getProduct("PL1000")).toBeInstanceOf(Product);
  });
  test("check if product name matches", () => {
    let result = getProduct("PL1000").name;
    expect(result).toBe("Test-name");
  });
});
