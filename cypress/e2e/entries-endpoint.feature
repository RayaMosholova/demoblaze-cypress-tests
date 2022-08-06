Feature: Entries endpoint

  Scenario: '/entries' endpoint returns 9 results
    Given the user sends get request to the endpoint
    Then the response returns 9 results

  Scenario: Items from '/entries' endpoint have correct price
    Given the user sends get request to the endpoint
    Then the response returns 2 items with price less than 400 and 7 items with price more than 400 
  