Feature: Timezones in Worldtime API

  Scenario Outline: API handles properly the time in existing timezones

    Given I have a list of timezones
    When I select the timezone in <timezone_position>th position
    Then I should get the time for the selected timezone

    Examples:
      | timezone_position |
      | 45                | 
