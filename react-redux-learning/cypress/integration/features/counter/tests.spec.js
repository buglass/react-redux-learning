describe('counter tests', () => {
  it('initialises to 0', () => {
    cy.visit('http://localhost:3000')
    cy.get('#counterValue').eq('0')
  });

  it('increments correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#incrementCounter').click()
    cy.get('#counterValue').should('have.text', '1')
    cy.get('#incrementCounter').click()
    cy.get('#counterValue').should('have.text', '2')
  });

  it('decrements correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#decrementCounter').click()
    cy.get('#counterValue').should('have.text', '-1')
    cy.get('#decrementCounter').click()
    cy.get('#counterValue').should('have.text', '-2')
  });

  it('increments by specific amount correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#incrementAmount').clear()
    cy.get('#incrementAmount').type('3')
    cy.get('#incrementByAmount').click()
    cy.get('#counterValue').should('have.text', '3')
  });

  it('increments by specific amount using async correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#incrementAmount').clear()
    cy.get('#incrementAmount').type('3')
    cy.get('#incrementByAmountAsync').click()
    // Feels a bit hacky.
    // Use contains to ensure a minimum timeout is allowed for the element to update.
    // Then use should have text to ensure the precise text exists.
    cy.contains('#counterValue', '3', {timeout: 11000})
    cy.get('#counterValue').should('have.text', '3')
  });
})