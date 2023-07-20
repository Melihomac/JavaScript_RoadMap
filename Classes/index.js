class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Car("Ford", 2014);
console.log("My car is " + myCar1.name + " year is " + myCar1.year)



class Person {
    constructor(name) {
        this.name = name;
    }
    // getter
    get personName() {
        return this.name;
    }
    // setter
    set personName(x) {
        this.name = x;
    }
}
let person1 = new Person('Jack');
console.log(person1.name); // Jack
// changing the value of name property
person1.personName = 'Sarah';
console.log(person1.name); // Sarah



class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
