/// <reference types="cypress" />

describe("Login With Fixture Data", () => {
    it("visit the website", () => {
      cy.visit("https://www.saucedemo.com/", {timeout:10000});
      cy.get('input').should('have.id', 'user-name')


     // it("Should try login", () => {
        cy.fixture("userSaucedemo").then((userSaucedemo) => {
          const username = userSaucedemo.username;
          const password = userSaucedemo.password;
    
          //username password salah
          cy.get("#user-name").clear();
          cy.get("#user-name").type('username');
    
          cy.get("#password").clear();
          cy.get("#password").type('password');
    
          cy.get("#login-button").click();
    
          cy.get("h3").should("contain.text", "Epic sadface: Username and password do not match any user in this service"); 
          //h3[.='Epic sadface: Username and password do not match any user in this service']
          cy.reload()
  
          // username password locked
          cy.get("#user-name").clear();
          cy.get("#user-name").type('locked_out_user');
    
          cy.get("#password").clear();
          cy.get("#password").type(password);
    
          cy.get("#login-button").click();
          cy.get("h3").should("contain.text", "Epic sadface: Sorry, this user has been locked out.");
          cy.reload()
       // });
      });
    });
  
   
  });