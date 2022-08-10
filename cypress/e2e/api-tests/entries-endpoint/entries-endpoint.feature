Feature: Entries endpoint

  Background:
    Given the user sends get request to the endpoint

  Scenario: '/entries' endpoint returns 9 results
    Then the response returns 9 results

  Scenario: Items from '/entries' endpoint have correct price
    Then the response returns 2 items with price less than 400 and 7 items with price more than 400
  