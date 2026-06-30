import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        if(code.equalsIgnoreCase("IN"))
            return new Country("IN","India");

        if(code.equalsIgnoreCase("US"))
            return new Country("US","United States");

        return new Country("NA","Not Found");

    }

}
