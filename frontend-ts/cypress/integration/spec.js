describe("Writing first Test", () => {
  it("Checks the button label", () => {
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

  it("Hyper-link click", () => {
    cy.server();
    cy.route("GET", "http://localhost:3001/products", "fixture:products.json");
    cy.visit("/");
    cy.contains("CLICK FOR INFORMATION").click();
  });

  it("Checks the link label", () => {
    cy.server();
    cy.route("GET", "http://localhost:3001/products", "fixture:products.json");
    cy.visit("/");
    cy.contains("CLICK FOR INFORMATION");
  });

  it("Checks the Header label", () => {
    cy.server();
    cy.route("GET", "http://localhost:3001/products", "fixture:products.json");
    cy.visit("/");
    cy.contains("ORDER NOW");
  });
});
