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

  test("classes created", () => {
    console.log = jest.fn();
    let product1 = new Product("plNumber", "name", "dose", "substance", "url");
    let expectresult = `
PL Number: plNumber
Name: name
Dose: dose
Substance: substance
URL: url
`;
    product1.describe();
    expect(console.log.mock.calls[0][0]).toBe(expectresult);
  });
});
