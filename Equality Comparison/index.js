const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

const a = 100;
const b = '100';
console.log(a == b) // true
console.log(a === b) // false

function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        // x and y are equal (may be -0 and 0) or they are both NaN
        return x === y || (x !== x && y !== y);
    }
    return x === y;
}