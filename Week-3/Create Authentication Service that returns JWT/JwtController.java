import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtController {

    @GetMapping("/authenticate")
    public JwtResponse authenticate() {

        return new JwtResponse("sample-jwt-token-123456");

    }

}
