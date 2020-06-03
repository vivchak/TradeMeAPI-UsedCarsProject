package util;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(  glue = "stepsDefinition",
        features = "src/test/features",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json"},
        tags = {"@all"}
)

public class RunCucumberTest {
}
