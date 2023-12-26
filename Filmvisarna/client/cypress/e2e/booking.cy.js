describe('Tickets Page Tests', () => {
  it('displays loading state and then shows content after loading', () => {
    cy.visit('http://localhost:5173/bokning');

    cy.contains('Biljetter till föreställningar').should('be.visible');
  });
});
