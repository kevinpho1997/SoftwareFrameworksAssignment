describe('My First Test', () => {
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
    // cy.get('form')
    // cy.get('form').contains('loginClicked($event)').click()
  })
  it('Visit Chat page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
    cy.get('h1').contains('Users')
  })
})
