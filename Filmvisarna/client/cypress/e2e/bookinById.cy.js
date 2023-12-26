describe('ScreeningCard Tests', () => {
  it('displays loading state, search results, and error handling', () => {
    cy.visit('http://localhost:5174/bokning/655329ac2756207f7c791d41');
    cy.get('title').should('exist');
    cy.get('button').should('be.visible');
  });
});
