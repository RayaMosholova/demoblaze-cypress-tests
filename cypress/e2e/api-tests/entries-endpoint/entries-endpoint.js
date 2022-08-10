import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user sends get request to the endpoint', () => {
    cy.request('https://api.demoblaze.com/entries').as('getItems')
})

Then('the response returns 9 results', () => {
    cy.get('@getItems').then(response => {
        expect(response.body['Items']).to.have.length(9)
    })
})

Then('the response returns 2 items with price less than 400 and 7 items with price more than 400', () => {
    cy.get('@getItems').then(response => {
        let itemsOver400 = 0
        let itemsBelow400 = 0
        response.body['Items'].forEach(item => {
            if (item.price > 400) {
                itemsOver400 += 1
            } else {
                itemsBelow400 += 1
            }
        })
        expect(itemsBelow400).to.be.equal(2)
        expect(itemsOver400).to.be.equal(7)
    })
})