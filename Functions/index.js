// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}

let carName = "Bmw"
function myFunction() {
    carName = "Volvo";
}
myFunction()
console.log(carName) // Volvo

function myFunc(theObject) {
    theObject.make = "Toyota";
}
const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};
console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

const foo = function bar() {
    // statements go here
};

// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");
console.log(myPet()); // "Vivie"

const createPet = function (name) {
    const pet = {
        setName(newName) {
            name = newName;
        },
        getName() {
            return name;
        },
    }
    return pet;
}
const pet2 = createPet("Vivie");

function createCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
const myCounter = createCounter();
console.log(myCounter()); // Output: 0
console.log(myCounter()); // 1

