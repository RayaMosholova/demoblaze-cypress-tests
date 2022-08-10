Feature:  Adding and deleting items from the cart

 Scenario: Authorized user is able to add and delete items from the cart
 
    Given the user in authorized
    And the cart is emptied
    When the user adds few items to the cart
    Then these items are placed in the cart
    When the user deletes all items from the cart
    Then the cart is empty