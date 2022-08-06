import { buttonInNavigationMenu, itemsOnHomepage, loggedInUsername } from "./page-objects/homepage"
import { loginModal, loginModalWindow } from "./page-objects/login-modal"

Cypress.Commands.add('login', (user) => {
    cy.visit('/')
    cy.get(buttonInNavigationMenu).contains('Log in').click()
    cy.wait(500)
    cy.get(loginModal.usernameField).type(user.username)
    cy.get(loginModal.passwordField).type(user.password)
    cy.get(loginModal.loginButton).click()
    cy.get(loginModalWindow).should('not.be.visible')
    cy.get(loggedInUsername).should('exist').and('have.text', `Welcome ${user.username}`)
})