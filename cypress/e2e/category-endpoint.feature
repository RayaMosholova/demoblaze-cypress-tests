Feature: Category endpoint

  Scenario: Phones category returns 7 items
    Given the user sends get request to category endpoint
    Then the response returns 7 items in phones category

  Scenario: Laptops category returns 6 items
    Given the user sends get request to category endpoint
    Then the response returns 6 items in laptops category

  Scenario: Monitors category returns 2 items
    Given the user sends get request to category endpoint
    Then the response returns 2 items in monitors category
    