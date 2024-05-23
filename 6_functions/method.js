class Car {
    constructor(brand) {
        this.brand = brand;
    }

    // Regular method
    startEngine() {
        console.log(`${this.brand} engine started.`);
    }
}

const myCar = new Car("Toyota");
myCar.startEngine(); // Output: Toyota engine started.
