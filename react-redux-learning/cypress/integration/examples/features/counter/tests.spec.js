describe('counter tests', () => {
    it('initialises to 0', () => {
        cy.visit('http://localhost:3000')
        cy.get('#counterValue').eq('0')
    })
})