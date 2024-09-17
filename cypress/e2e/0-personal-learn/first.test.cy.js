/// <reference types="cypress" />

describe('My First Test', () =>{
    it('Visit The Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        // cy.contains('type')

        cy.get('h1').contains('Kitchen Sink')

        // cy.contains('get').click()
        // cy.url().should('include', '/commands/querying')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('nurulhandayani@gmail.com')
        .should('have.value', 'nurulhandayani@gmail.com')
    });
});