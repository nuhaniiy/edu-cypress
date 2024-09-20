/// <reference types="cypress" />

describe('Working with inputs', () => {
    
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.url().should('include', 'login.html')
    // });
  //  it('should input username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
  //  });
   // it('should input password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
//    });
   // it('should click keep me sign in', () => {
         cy.get('#user_remember_me').click()
//    });


 //  it('Should try to login', () => {
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        
        cy.login(username, password)

        cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')


       })
  // });



   });

});
