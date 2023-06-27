// Variables 

var x = 5;
let y = 10;
const z = 15;

carName = "Volvo"; // or let carName="Volvo";

let name = "Steve"; //assigned string value
let num = 100; //assigned numeric value
let isActive = true; //assigned boolean value

/*
let numberLet = 100;
let numberLet = 200; //syntax error  
*/
var numberVar = 100;
var numberVar = 200; //Ok

const person = { name: "Melih" };
person.name = "Steve";
console.log(person.name); // Steve

let greet = "Hello " // global variable

function myfunction() {
    let msg = "JavaScript!"; // if its not let you can use global. So use let!!!
    console.log(greet + msg); //can access global and local variable
}

myfunction(); // Hello JavaScript

console.log(greet);//can access global variable. It will say Hello
//console.log(msg); //error: can't access local variable

myName = "Chris";

function logName() {
    console.log(myName);
}

logName(); // Chris

let myNameArray = ["Chris", "Bob", "Jim"]; // Array Declaration
myNameArray[0]; // should return 'Chris'

let dog = { name: "Spot", breed: "Dalmatian" }; // Object Declaration
dog.name;  // should return 'Sport'
