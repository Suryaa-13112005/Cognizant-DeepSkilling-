public class SpringConfig {

    public static void main(String[] args) {

        Country country = new Country("IN", "India");

        System.out.println(country.getCode());
        System.out.println(country.getName());

    }

}
