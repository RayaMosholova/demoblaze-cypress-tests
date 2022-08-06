Feature: Homepage

  Scenario: Number and type of categories on homepage is correct
    When the user is on the homepage
    Then they can see only 3 categories available
    And the categories are Phones, Laptops, and Monitors

  Scenario: All items have price tag
    When the user is on the homepage
    Then they can see all items are having price tag
