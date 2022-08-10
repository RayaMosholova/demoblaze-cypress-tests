import { Then, And, Given } from '@badeball/cypress-cucumber-preprocessor'
import { categoriesList, itemsOnHomepage } from '../../../support/page-objects/homepage'

Given('the user is on the homepage', () => {
  cy.visit('/')
})

Then('the user can see only 3 categories available', () => {
  cy.get(categoriesList).should('have.length', 3)
})

And('the categories are Phones, Laptops, and Monitors', () => {
  cy.get(categoriesList).then(categories => {
    const expectedCategories = ["Phones", "Laptops", "Monitors"]
    expect(categories.toArray().map(o => o.innerText)).to.have.members(expectedCategories)
  })
})

Then('the user can see all items are having price tag', () => {
  cy.get(`${itemsOnHomepage} h5`).should('have.length', 9).and('contain.text', '$')
})