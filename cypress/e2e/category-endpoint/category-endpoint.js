import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user sends get request to {string} category endpoint', (category) => {
    cy.request('POST', 'https://api.demoblaze.com/bycat', {
        cat: category
    }).as(`get${category}`)
})

Then('the response returns {int} items in {string} category', (count, category) => {
    cy.get(`@get${category}`).then(response => {
        expect(response.body['Items']).to.have.length(count)
    })
})