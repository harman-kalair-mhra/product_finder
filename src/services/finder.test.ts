import ProductFinder from "./finder";
import Product from "../models/product";

function setUp(name) {
  let mockProduct = new Product(
    "PL1000",
    "Test-name",
    "Test-dose",
    "Test-substance",
    "Test-url"
  );
  return () => {
    return { PL1000: mockProduct };
  };
}

describe("Product finder Test", () => {
  test("return product when product is exists", () => {
    let mockDataSource = setUp("Test-name");
    let finder = new ProductFinder(mockDataSource);
    let result = finder.getProduct("PL1000");
    expect(result).toBeInstanceOf(Product);
  });
  test("check if product name matches", () => {
    let expected = "Test-name";
    let mockDataSource = setUp(expected);
    let finder = new ProductFinder(mockDataSource);
    let result = finder.getProduct("PL1000").name;
    expect(result).toBe(expected);
  });
});
