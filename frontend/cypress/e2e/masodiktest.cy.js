describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('[id="autok"]').click();
    cy.get('[id="kijelentkezes"]').click();
    cy.get('[id="autok"]').click();
    cy.get('[id="regisztracio"]').click();
    cy.get('[id="nev"').type("Marko2")
    cy.get('[id="email"').type("marko2@gmail.com")
    cy.get('[id="jelszo"').type("marko2")
    cy.get('[id="jelszo-ujra"').type("marko2")
    cy.get('[id="regisztracio-gomb"]').click();
    // cy.get('[id="bejelentkezes"]').click();
    // cy.get('[id="email"').type("marko2@gmail.com")
    // cy.get('[id="jelszo"').type("marko2")
    // cy.get('[id="bejelentkezes-gomb"]').click();
  })
})