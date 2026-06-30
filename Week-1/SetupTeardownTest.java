import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

public class SetupTeardownTest {

    @BeforeEach
    void setup() {
        System.out.println("Setup before test");
    }

    @Test
    void sampleTest() {
        System.out.println("Executing Test");
    }

    @AfterEach
    void teardown() {
        System.out.println("Cleanup after test");
    }
}
