Feature: Timezones in Worldtime API

  Scenario Outline: API handles properly the non-existing timezones

    Given I have a list of timezones
    When I search for the timezone "<timezone>"
    Then I should get an empty response

    Examples:
      | timezone        |
      | America/Beijing | 
