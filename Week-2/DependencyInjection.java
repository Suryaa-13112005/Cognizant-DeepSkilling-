class Engine {

    void start() {
        System.out.println("Engine Started");
    }

}

class Car {

    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    void drive() {
        engine.start();
        System.out.println("Car is Running");
    }

}

public class DependencyInjection {

    public static void main(String[] args) {

        Engine engine = new Engine();

        Car car = new Car(engine);

        car.drive();

    }

}
