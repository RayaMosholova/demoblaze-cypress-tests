import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import { cartItems, priceRows, totalPrice } from '../../support/page-objects/cart'
import { addItemsToCart, navMenuButton } from '../../support/page-objects/homepage'
import { defaultUser } from '../../fixtures/users.json'

Given('the user is logged in', () => {
    // the below programatic login is made in order to be able to empty the cart for the logged user further in the tests 
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

    cy.login(defaultUser)
})

When('the user opens one item', () => {
    // ToDo
})

And('adds that item to the cart', () => {
    // ToDo
})

Then('the "Product added" pop up is displayed', () => {
    // ToDo
})

And('the shopping cart is empty', () => {
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

When('the user adds few items in the cart', () => {
    const items = ['Samsung galaxy s6', 'Samsung galaxy s7', 'Nexus 6']
    cy.visit('/')
    addItemsToCart(items)
})

And('the user goes to the cart page', () => {
    cy.get(navMenuButton).contains('Cart').click()
})

Then('the total amount in the cart matches the total item prices in the cart', () => {
    cy.get(cartItems).as('cartItems').should('have.length', 3)
    cy.get('@cartItems').then(rows => {
        let sum = 0
        rows.find(priceRows).toArray().forEach(cell => {
            sum += parseInt(cell.innerText)
        })
        cy.get(totalPrice).should('have.text', sum)
    })
})