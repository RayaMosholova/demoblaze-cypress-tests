import { Given, When, Then, And, } from '@badeball/cypress-cucumber-preprocessor'
import { aboutUsVideoModal, navMenuButton } from '../../support/page-objects/homepage'

Given('the user is on the homepage', () => {
    cy.visit('/')
})

When('the user clicks "About us" button from the top menu', () => {
    cy.get(navMenuButton).contains('About us').click()
})

Then('"About us" pop up is opened', () => {
    cy.get(aboutUsVideoModal).should('be.visible')
})

And('the "About us" video is in paused state', () => {
    cy.get(`${aboutUsVideoModal} .vjs-paused`).should('exist')
})