describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('[id="autok"]').click();
    cy.get('[id="kijelentkezes"]').click();
    cy.get('[id="autok"]').click();
    cy.get('[id="bejelentkezes"]').click();
    cy.get('[id="email"').type("pepe@gmail.com")
    cy.get('[id="jelszo"').type("pepe")
    cy.get('[id="bejelentkezes-gomb"]').click();
  })
})