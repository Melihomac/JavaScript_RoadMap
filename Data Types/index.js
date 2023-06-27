// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

/*
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String 
*/

console.log({} + []); // "[object Object]" // Object ve Array Object

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

console.log(student.firstName)