Feature: Adding items to cart

  Background:
    Given the user is logged in

  Scenario: "Product added" pop up is displayed when an item is added to the cart
    When the user opens one item
    And adds that item to the cart
    Then the "Product added" pop up is displayed

  Scenario: Total amount in the cart matches the total item prices in the cart
    And the shopping cart is empty
    When the user adds few items in the cart
    And the user goes to the cart page
    Then the total amount in the cart matches the total item prices in the cart