Feature: About us video

  Scenario: About us video is paused when "About us" pop up is opened
    Given the user is on the homepage
    When the user clicks "About us" button from the top menu
    Then "About us" pop up is opened
    And the "About us" video is in paused state
