import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import { defaultUser } from '../../fixtures/users.json'
import products from '../../fixtures/products.json'

Given('the user in authorized', () => {
    const { username, password } = defaultUser
    const encodedPassword = btoa(password)
    cy.request('POST', 'https://api.demoblaze.com/login', {
        username,
        password: encodedPassword
    }).as('login')

    cy.get('@login').then(response => {
        const body = response.body
        expect(body).to.contain("Auth_token")
    })
})

And('the cart is emptied', () => {
    cy.get('@login').then(response => {
        const authToken = response.body.split(': ')[1]
        cy.request('POST', 'https://api.demoblaze.com/viewcart', {
            cookie: authToken,
            flag: true
        }).then(response => {
            response.body['Items'].forEach(item => {
                cy.request('POST', 'https://api.demoblaze.com/deleteitem', {
                    id: item.id
                })
            })
        })
    })
})

When('the user adds few items to the cart', () => {
    cy.get('@login').then(response => {
        const authToken = response.body.split(': ')[1]
        cy.request('POST', 'https://api.demoblaze.com/addtocart', {
            id: products.galaxyS6.id,
            cookie: authToken,
            prod_id: products.galaxyS6.prod_id,
            flag: true
        }).then(response => {
            expect(response.status).to.eq(200)
        })

        cy.request('POST', 'https://api.demoblaze.com/addtocart', {
            id: products.htc.id,
            cookie: authToken,
            prod_id: products.htc.prod_id,
            flag: true
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })

})

Then('these items are placed in the cart', () => {
    cy.get('@login').then(response => {
        const authToken = response.body.split(': ')[1]
        cy.request('POST', 'https://api.demoblaze.com/viewcart', {
            cookie: authToken,
            flag: true
        }).then(response => {
            [products.galaxyS6.id, products.htc.id].forEach(id => {
                const found = response.body['Items'].find(product => product.id === id)
                expect(found).not.to.be.undefined
            })
        })
    })

})

When('the user deletes all items from the cart', () => {
    cy.get('@login').then(response => {
        const authToken = response.body.split(': ')[1]
        cy.request('POST', 'https://api.demoblaze.com/viewcart', {
            cookie: authToken,
            flag: true
        }).then(response => {
            response.body['Items'].forEach(item => {
                cy.request('POST', 'https://api.demoblaze.com/deleteitem', {
                    id: item.id
                })
            })
        })
    })

})

Then('the cart is empty', () => {
    cy.get('@login').then(response => {
        const authToken = response.body.split(': ')[1]
        cy.request('POST', 'https://api.demoblaze.com/viewcart', {
            cookie: authToken,
            flag: true
        }).then(response => {
            expect(response.body['Items'].length).to.eq(0)
        })
    })
})