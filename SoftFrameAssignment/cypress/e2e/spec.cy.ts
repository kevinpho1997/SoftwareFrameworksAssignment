describe('My First Test', () => {
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
  })
})

describe('My First Test', () => {
  function login() {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
    // cy.saveLocalStorage();
  }
  beforeEach(() => {
    login()
    // cy.setLocalStorage("username", "kevin");
    // cy.restoreLocalStorage();
  });

  it('Visits the login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
  })
  it('logout', () => {
    cy.get("a[name=logout-button]").click()
    cy.get('h1').contains("Login into your account")
  })
  it('Visit Chat page', () => {
    cy.get('h1').contains('Users')
  })
  it('should contain a table of users', () => {
    cy.get('table').contains('super')
    cy.get('table').contains('kevin')
    cy.get('table').contains('yeji')
    cy.get('table').contains('dahyun')
  })
  it('should visit register page', () => {
    cy.visit('http://localhost:4200/register');
    // cy.get('h1').contains("Register a User")
  })
})
