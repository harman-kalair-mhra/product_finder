describe("Writing first Test", () => {
  it("Test 1", () => {
    cy.server();
    cy.route("GET", "http://localhost:3001/products", "fixture:products.json");
    cy.visit("/");
    cy.contains("Select");
  });

  it("Button click", () => {
    cy.server();
    cy.route("GET", "http://localhost:3001/products", "fixture:products.json");
    cy.visit("/");
    cy.contains("Select").click();
  });
});
