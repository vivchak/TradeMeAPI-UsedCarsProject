@all
Feature: Checking used cars from TradeMe API

  Background:
    Given a service request is sent to API for used cars categories
    When a response is returned

  @category-usedCars
  Scenario: User calls TradeMe API used car service for knowing number of named brands returned
    Given User makes an API call requests to TradeMe used car make service
    Then the status code returned is 200
    And the number of categories for used cars is printed in log

  @usedCar-kia
  Scenario: Check the brand 'KIA' exists and TradeMe API returns the current number of Kia cars listed
    Given User makes an API call requests to TradeMe used car make service
    Then the status code returned is 200
    And the number of KIA cars in used cars search is printed in log

  @hispano-suiza
  Scenario: Check for brand 'Hispano Suiza' does not exists in TradeMe
    Given User makes an API call requests to TradeMe used car make service
    Then the status code returned is 200
    And the brand "Hispano Suiza" does not exists



