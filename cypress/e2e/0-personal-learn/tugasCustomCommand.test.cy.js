/// <reference types="cypress" />
describe("Pay Bills", () => {
    it("visit the login website", () => {
      cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
      cy.url().should("include", "login.html");
    // });
    // it("Should Try Login", () => {
      cy.fixture("zerologin").then((zerologin) => {
        const username = zerologin.username;
        const password = zerologin.password;
  
        cy.zeroLogin(username, password);
      });

      cy.get('li[id="pay_bills_tab"]').find("a").contains("Pay Bills").click();
      const payee = 'Sprint'
      const account = 'Checking'
      const amount = '100'
      const date = '2024-04-10'
      const description ='Belajar custom commands cypress !!!'

      cy.paybills(payee, account, amount, date, description);
      cy.get('#alert_content > span')
    });
  });