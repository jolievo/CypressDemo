describe('Login Flow', () => {
  it('logs in successfully with correct credentials', () => {
    cy.visit('http://localhost:3000');
    cy.get('#username').type('admin');
    cy.get('#password').type('123');
    cy.get('button').click();
    cy.contains('Login successful');
  });
});
