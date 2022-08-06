import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('the user is on the Homepage', () => {
  cy.visit('/');
});

Then('they can see only 3 categories available', () => {
  return 'pending'
})