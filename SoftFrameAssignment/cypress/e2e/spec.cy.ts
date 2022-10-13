describe('My First Test', () => {
  it('Visits the login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
  })
  it('Visit a page without being logged in', () => {
    cy.visit('http://localhost:4200/register');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`You do not have access permissions or have not logged in.`)
    })
  })
})

describe('My First Test', () => {
  function login() {
    cy.visit('http://localhost:4200/login');
    cy.get('h1').contains("Login into your account")
    cy.get('input[name=username]').type("kevin")
    cy.get('input[name=password]').type("123")
    cy.get('button[name=sign-in-button]').click()
    // cy.on('window:before:load', (win) => {      
    //   // should fire after Cypress clears localStorage
    //   window.localStorage.setItem('username', "kevin")  
    // }) 
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
    // cy.on('window:before:load', (win) => {      
    //   // should fire after Cypress clears localStorage
    //   window.localStorage.setItem('username', "kevin")  
    // }) 
    cy.visit('http://localhost:4200/register');
    // cy.get('h1').contains("Register a User")
  })
  it('should visit channel page', () => {
    // cy.on('window:before:load', (win) => {      
    //   // should fire after Cypress clears localStorage
    //   window.localStorage.setItem('username', "kevin")  
    // }) 
    cy.visit('http://localhost:4200/channel');
    // cy.get('h1').contains("Register a User")
  })
})
