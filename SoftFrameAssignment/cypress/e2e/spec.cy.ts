describe('My First Test', () => {
  function login() {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
  }
  it('Visits the login page', () => {
    login();
    // cy.get('form')
    // cy.get('form').contains('loginClicked($event)').click()
  })
  it('Visit Chat page', () => {
    login();
    cy.get('h1').contains('Users')
  })
  // it('should contain a table of users', () => {
  //   cy.visit('http://localhost:4200/login');
  //   cy.get('h1').contains("Login into your account")
  //   cy.get('input[name=username]').type("kevin")
  //   cy.get('input[name=password]').type("123")
  //   cy.get('button[name=sign-in-button]').click()

  // })
})
