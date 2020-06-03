# Project
This is a test project to extract used car categories, make from TradeMe Sandbox API

## Scenarios covered in this project
Using the TradeMe Sandbox web site write automation code which does the following:
1. Return how many named brands of used cars are available in the TradeMe UsedCars category.
2. Check that the brand ‘Kia’ exists and return the current number of Kia cars listed.
3. Check that the brand ‘Hispano Suiza’ does not exist.

## Tools/Libraries required to run this project
- JDK 10 and above
- Maven - build tool
- Junit - test runner
- Cucumber - BDD/Gherkin written feature files
- Rest assured library files

## How to Run the tests using maven
- Check that Java is installed on the computer and all environmental settings have been configured
- Ensure Maven is installed and configured
- Source control tool (git, etc.) which could pull the project repository to your local machine
- Run the below script from the command line in directory path or from inside your IDE
```
mvn clean test
```