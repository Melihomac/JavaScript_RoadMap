const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0])
console.log(cars.length)

const personArray = ["John", "Doe", 46]; // Array
const personObject = { firstName: "John", lastName: "Doe", age: 46 }; // Object

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits 

// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const pointss = new Array(40);

// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { console.log('hello'); }];
// get the object at index 1 and then show its name
console.log(arr[1].name); // John
// get the function at index 3 and run it
arr[3](); // hello

let arr2 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}