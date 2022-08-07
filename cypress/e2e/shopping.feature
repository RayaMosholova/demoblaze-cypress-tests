Feature:  Adding and deleting items from the cart

 Background:
    Given the user in authorized
    And the cart is emptied

  Scenario: Authorized user is able to add items to the cart
    When the user adds "samsung galaxy s6" and "htc one m9" to the cart
    Then these items are placed in the cart

  Scenario: Authorized user is able to add and delete items from the cart
    When the user adds few items to the cart
    Then the cart is not empty
    When the user deletes all items from the cart
    Then the cart is empty