Feature: Adding items to cart
  
  Scenario: Total amount in the cart matches the total item prices in the cart
    Given the user is logged in
    And the shopping cart is empty
    When the user adds few items in the cart
    And the user goes to the cart page
    Then the total amount in the cart matches the total item prices in the cart