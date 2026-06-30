import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AAATest {

    @Test
    void testAddition() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = a + b;

        // Assert
        assertEquals(30, result);

    }
}
