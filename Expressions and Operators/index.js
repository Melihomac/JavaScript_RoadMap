const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.
const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

let username = "" // eğer içeriye "Melih" yazarsam hello Melih diyecekti
greeting = "hello " + (username ? username : "there");
console.log(greeting) // hello there

let maxWidth = 1000;
// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;
console.log(max)