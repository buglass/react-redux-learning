describe('counter tests', () => {
    it('initialises to 0', () => {
        cy.visit('http://localhost:3000')
        cy.get('.App-header > :nth-child(2) > :nth-child(2)').eq('0')
    })
})