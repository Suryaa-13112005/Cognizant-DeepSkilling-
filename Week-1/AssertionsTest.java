import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    void testAssertions() {

        assertEquals(10, 5 + 5);

        assertTrue(20 > 10);

        assertFalse(5 > 10);

        assertNotNull("Cognizant");

        assertNull(null);
    }
}
