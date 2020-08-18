describe('internationalisation tests', () => {
    it('style is english', () => {
        cy.visit('http://localhost:3000')
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'englishStyle')
    });
});
