Feature: Category endpoint

  Scenario: Phones category returns 7 items
    Given the user sends get request to "phone" category endpoint
    Then the response returns 7 items in "phone" category

  Scenario: Laptops category returns 6 items
    Given the user sends get request to "notebook" category endpoint
    Then the response returns 6 items in "notebook" category

  Scenario: Monitors category returns 2 items
    Given the user sends get request to "monitor" category endpoint
    Then the response returns 2 items in "monitor" category
