Feature: Adding items to cart

  Scenario: 'Product added' pop up is displayed when an item is added to the cart
    Given the user is logged in
    When the user opens one item
    And adds that item to the card
    Then the 'Product added' pop up is displayed

  Scenario: Total amount in the cart matches the total item prices in the cart
    Given the user is logged in
    When the user adds few items in the cart
    And goes to the cart page
    Then the total amount in the cart matces the total item prices in the cart