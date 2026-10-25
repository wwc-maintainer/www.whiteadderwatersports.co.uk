Feature: As a visitor I want to visit the live website in order to be confident it is working

  @timeout:15000
  Scenario: Visit the Domain
    Given I have an open browser
    When I navigate to "https://www.whiteadderwatersports.co.uk/"
    Then I see "Whiteadder Watersports Centre" in the title
