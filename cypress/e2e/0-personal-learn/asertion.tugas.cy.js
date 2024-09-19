/// <reference types="cypress" />

describe('My First Test', () => {

    it('Clicking "type" show the right headings', () => {
        cy.visit('https://example.cypress.io', {timeout: 10000});

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        
        cy.get('.action-email')
        .type('nurulhandayani@gmail.com')
        .should('have.value', 'nurulhandayani@gmail.com')
    });

});
