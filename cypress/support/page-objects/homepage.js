export const categoriesList = '.list-group #itemc'
export const itemsOnHomepage = '#tbodyid .card'
export const navMenuButton = 'a.nav-link'
export const aboutUsVideoModal = '#videoModal'
export const loggedInUsername = '#nameofuser'

export function addItemsToCart(itemNames) {
    for (let i = 0; i < itemNames.length; i++) {
        cy.get(itemsOnHomepage).contains(itemNames[i]).click()
        cy.get('a.btn').contains('Add to cart').click()
        cy.get(navMenuButton).contains('Home').click()
    }
}