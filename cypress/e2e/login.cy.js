describe('Login Flow', () => {
  it('logs in successfully with correct credentials', () => {
    cy.visit('http://localhost:3000');
    cy.get('#username').type('admin123');
    cy.get('#password').type('123123');
    cy.get('button').click();
    cy.contains('Login successful');
  });
});
