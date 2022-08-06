Feature: Homepage
 
  Background:
    Given the user is on the homepage

  Scenario: Number and type of categories on homepage is correct
    Then the user can see only 3 categories available
    And the categories are Phones, Laptops, and Monitors
  
  Scenario: All items have price tag
    Then the user can see all items are having price tag