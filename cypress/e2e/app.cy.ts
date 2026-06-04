describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("muestra el título correctamente", () => {
    cy.get("h1").should("contain", "Hola Mundo");
  });

  it("muestra el párrafo correctamente", () => {
    cy.get("p").should("contain", "Bienvenido a mi aplicación");
  });

  it("muestra el botón correctamente", () => {
    cy.get("button").should("exist");
  });
});