describe('My First Test', () => {
  function login() {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
  }
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
  })
  it('logout', () => {
    login();
    cy.get("a[name=logout-button]").click()
    cy.get('h1').contains("Login into your account")
  })
  it('Visit Chat page', () => {
    login();
    cy.get('h1').contains('Users')
  })
  it('should contain a table of users', () => {
    login();
    cy.get('table').contains('super')
    cy.get('table').contains('kevin')
    cy.get('table').contains('yeji')
    cy.get('table').contains('dahyun')
  })
  
})
