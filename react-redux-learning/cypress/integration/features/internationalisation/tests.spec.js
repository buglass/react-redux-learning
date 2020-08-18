describe('internationalisation tests', () => {
    it('style initialises as english', () => {
        cy.visit('http://localhost:3000')
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'englishStyle')
    });

    it('style changes to english', () => {
        cy.visit('http://localhost:3000')
        cy.get('#selectCymraeg').click()
        cy.get('#selectEnglish').click()
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'englishStyle')
    });

    it('style changes to welsh', () => {
        cy.visit('http://localhost:3000')
        cy.get('#selectEnglish').click()
        cy.get('#selectCymraeg').click()
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'cymraegStyle')
    });
});
