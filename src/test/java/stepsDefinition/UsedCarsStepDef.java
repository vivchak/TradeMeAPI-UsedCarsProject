package stepsDefinition;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class UsedCarsStepDef {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification serviceRequest;

    private static Logger logger = Logger.getLogger(UsedCarsStepDef.class.getName());

    private String ENDPOINT_USED_CAR_CATEGORIES = "https://api.trademe.co.nz/v1/Categories/UsedCars.json";


    @Given("^a service request is sent to API for used cars categories$")
    public void aServiceRequestIsSentToAPIForUsedCarsCategories() {
        logger.info(" -------  Sending TradeMe API used cars category request -------------");
        serviceRequest = given();
    }

    @When("^a response is returned$")
    public void aResponseIsReturned()  {
        response = serviceRequest.when().get(ENDPOINT_USED_CAR_CATEGORIES);
        response.then().log().all();
        System.out.println("TradeMe API Used Car Categories Response: " + response.prettyPrint());

        logger.info(" -------  TradeMe API used cars category response returned -------------");

    }

    @Then("^the status code returned is (\\d+)$")
    public void theStatusCodeReturnedIs(int status)  {
        json = response.then().statusCode(status);

        logger.info(" -------  API response code 200 returned -------------");

    }


    @And("^the number of categories for used cars is printed in log$")
    public void theNumberOfCategoriesForUsedCarsIsPrintedInLog()  {
        int totalUsedCarsBrandCategories = json.extract().path("Subcategories.Name.size()");
        System.out.println("The total used car categories returned is: " +totalUsedCarsBrandCategories);

        logger.info(" -------  logged the total categories of used cars returned -------------");
    }


    @And("^the number of KIA cars in used cars search is printed in log$")
    public void theNumberOfKIACarsInUsedCarsSearchIsPrintedInLog(){

        logger.info(" -------  Assert that KIA vehicle is returned in API response -------------");
        json.assertThat().body(	"Name", equalTo("Cars"),
                          "Subcategories.Name", hasItem("Kia"));

        List<String> jsonResponse = response.jsonPath().getList("Subcategories.Name");
        int noOfUsedKiaCars = Collections.frequency(jsonResponse, "Kia");
        System.out.println("No of used Kia cars returned: "+noOfUsedKiaCars);
    }


    @And("^the brand \"([^\"]*)\" does not exists$")
    public void theBrandDoesNotExists(String brandName) {

        logger.info(" -------  Assert that Hispano Suiza does not exist in API response -------------");
        json.assertThat().body(	"Subcategories.Name", not(hasItem(brandName)));


    }

    @Given("^User makes an API call requests to TradeMe used car make service$")
    public void userMakesAnAPICallRequestsToTradeMeUsedCarMakeService() {
        // This step is already done in Background steps of feature file. This is created for better readability for BA and other team members
    }
}
