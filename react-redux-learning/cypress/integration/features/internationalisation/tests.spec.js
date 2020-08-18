describe('internationalisation tests', () => {
    it('style initialises as english', () => {
        cy.visit('http://localhost:3000')

        // The style is set in the reducer so could be tested functionally but should arguably use visual testing for this.
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'englishStyle')

        // A POC of testing the CSS but this is fragile and should be done using a proper visual testing tool.
        // https://docs.cypress.io/guides/tooling/visual-testing.html#Functional-vs-visual-testing
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    });

    it('style changes to english', () => {
        cy.visit('http://localhost:3000')
        cy.get('#selectCymraeg').click()
        cy.get('#selectEnglish').click()

        // The style is set in the reducer so could be tested functionally but should arguably use visual testing for this.
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'englishStyle')

        // A POC of testing the CSS but this is fragile and should be done using a proper visual testing tool.
        // https://docs.cypress.io/guides/tooling/visual-testing.html#Functional-vs-visual-testing
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    });

    it('style changes to welsh', () => {
        cy.visit('http://localhost:3000')
        cy.get('#selectEnglish').click()
        cy.get('#selectCymraeg').click()

        // The style is set in the reducer so could be tested functionally but should arguably use visual testing for this.
        cy.get('#internationalisationIndicatorDiv').should('have.class', 'cymraegStyle')

        // A POC of testing the CSS but this is fragile and should be done using a proper visual testing tool.
        // https://docs.cypress.io/guides/tooling/visual-testing.html#Functional-vs-visual-testing
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('#internationalisationIndicatorDiv').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    });
});
