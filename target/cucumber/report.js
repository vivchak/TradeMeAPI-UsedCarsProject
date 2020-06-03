$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("usedCars.feature");
formatter.feature({
  "line": 2,
  "name": "Checking used cars from TradeMe API",
  "description": "",
  "id": "checking-used-cars-from-trademe-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a service request is sent to API for used cars categories",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a response is returned",
  "keyword": "When "
});
formatter.match({
  "location": "UsedCarsStepDef.aServiceRequestIsSentToAPIForUsedCarsCategories()"
});
formatter.result({
  "duration": 1292742100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsStepDef.aResponseIsReturned()"
});
formatter.result({
  "duration": 1426682100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User calls TradeMe API used car service for knowing number of named brands returned",
  "description": "",
  "id": "checking-used-cars-from-trademe-api;user-calls-trademe-api-used-car-service-for-knowing-number-of-named-brands-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@category-usedCars"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User makes an API call requests to TradeMe used car make service",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the number of categories for used cars is printed in log",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsStepDef.userMakesAnAPICallRequestsToTradeMeUsedCarMakeService()"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "UsedCarsStepDef.theStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 37182400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsStepDef.theNumberOfCategoriesForUsedCarsIsPrintedInLog()"
});
formatter.result({
  "duration": 623639500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a service request is sent to API for used cars categories",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a response is returned",
  "keyword": "When "
});
formatter.match({
  "location": "UsedCarsStepDef.aServiceRequestIsSentToAPIForUsedCarsCategories()"
});
formatter.result({
  "duration": 895400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsStepDef.aResponseIsReturned()"
});
formatter.result({
  "duration": 142842000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check the brand \u0027KIA\u0027 exists and TradeMe API returns the current number of Kia cars listed",
  "description": "",
  "id": "checking-used-cars-from-trademe-api;check-the-brand-\u0027kia\u0027-exists-and-trademe-api-returns-the-current-number-of-kia-cars-listed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@usedCar-kia"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User makes an API call requests to TradeMe used car make service",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the number of KIA cars in used cars search is printed in log",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsStepDef.userMakesAnAPICallRequestsToTradeMeUsedCarMakeService()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "UsedCarsStepDef.theStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 1541600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsStepDef.theNumberOfKIACarsInUsedCarsSearchIsPrintedInLog()"
});
formatter.result({
  "duration": 259172700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a service request is sent to API for used cars categories",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a response is returned",
  "keyword": "When "
});
formatter.match({
  "location": "UsedCarsStepDef.aServiceRequestIsSentToAPIForUsedCarsCategories()"
});
formatter.result({
  "duration": 5244400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsStepDef.aResponseIsReturned()"
});
formatter.result({
  "duration": 149329100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check for brand \u0027Hispano Suiza\u0027 does not exists in TradeMe",
  "description": "",
  "id": "checking-used-cars-from-trademe-api;check-for-brand-\u0027hispano-suiza\u0027-does-not-exists-in-trademe",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@hispano-suiza"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User makes an API call requests to TradeMe used car make service",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the brand \"Hispano Suiza\" does not exists",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsStepDef.userMakesAnAPICallRequestsToTradeMeUsedCarMakeService()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "UsedCarsStepDef.theStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 1123300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispano Suiza",
      "offset": 11
    }
  ],
  "location": "UsedCarsStepDef.theBrandDoesNotExists(String)"
});
formatter.result({
  "duration": 60126600,
  "status": "passed"
});
});