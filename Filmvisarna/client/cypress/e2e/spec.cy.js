describe('Register Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/registrera');
    cy.wait(2000);
  });

  it('checks form fields and submits the form', () => {
    // Check if form fields exist
    cy.get('#name').should('exist');
    cy.get('#lastname').should('exist');
    cy.get('#phone').should('exist');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('#confirm_password').should('exist');

    // Fill in the form fields
    cy.get('#name').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#phone').type('123456789');
    cy.get('#email').type('john@example.com');
    cy.get('#password').type('Passw0rd');
    cy.get('#confirm_password').type('Passw0rd');

    // Submit the form
    cy.get('[type="submit"]').click();

    // Assert that success messages or actions happen after form submission
    // You can add assertions here based on what happens after the form submission.
    // For example, checking for success popups, reloads, or redirections.
  });
});
