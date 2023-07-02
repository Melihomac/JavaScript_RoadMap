let y = "5";      // y is a string
let x = + y;      // x is a number 
console.log(typeof (y), typeof (x)) // string, number. İkisinide 5 diye yazdırır fakat türleri farklı

let z = "John";   // z is a string
let k = + z;      // k is a number (NaN) 
console.log(typeof (z), typeof (k)) // string, number. Burada z = John, k = NaN çıktısını verir.

d = new Date();
d.getTime()
console.log(d)
console.log(d.toString())

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2 

let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

let result2;

result2 = '4' - true;
console.log(result2); // 3

result2 = 4 + true;
console.log(result2); // 5

result2 = 4 + false;
console.log(result2); // 4

let result3;
result3 = parseInt('20.01');
console.log(result3); // 20

result3 = parseFloat('20.01');
console.log(result3); // 20.01

let a = 12;
console.log(typeof (Boolean(a)), Boolean(a)) // Boolean tipi, true
console.log(typeof (a.toString()), a.toString()) // string tipi, 12

//Number(input)
//String(input)
//parseInt(input)
//parseFloat(input)

const sum = 35 + "hello"
console.log(sum); // 35hello
console.log(typeof sum) // string

const times = 35 * "hello"
console.log(times) // NaN
