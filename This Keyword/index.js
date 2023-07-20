const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()) // John Doe


class Car {
    constructor() {
        // Bind sayBye but not sayHi to show the difference
        this.sayBye = this.sayBye.bind(this);
    }
    sayHi() {
        console.log(`Hello from ${this.name}`);
    }
    sayBye() {
        console.log(`Bye from ${this.name}`);
    }
    get name() {
        return "Ferrari";
    }
}
class Bird {
    get name() {
        return "Tweety";
    }
}
const car = new Car();
const bird = new Bird();
// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety
// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari


const show = () => this
console.log('arrow function this', show())


const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function (city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}
const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}
console.log(person1.sayName.call(person2, "DF", "Mexico"));


function getBrand(prefix) {
    console.log(prefix + this.brand);
}
let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};
getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");