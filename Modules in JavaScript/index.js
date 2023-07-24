function getPower(decimalPlaces) {
    return 10 ** decimalPlaces;
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function roundToDecimalPlace(number, decimalPlaces = 2) {
    const round = getPower(decimalPlaces);
    return Math.round(number * round) / round;
}
export { capitalize, roundToDecimalPlace };

// çağırmak için import { capitalize, roundToDecimalPlace} from './index.js'


export default function greet(name) {
    return `Hello ${name}`;
}
export const age = 23;



let company = "TutorialsPoint"
let getCompany = function () {
    return company.toUpperCase()
}
let setCompany = function (newValue) {
    company = newValue
}
export { company, getCompany, setCompany }
// Daha sonra çağırmak için
// Approach 1
import { company, getCompany } from './company1.js'
console.log(company)
console.log(getCompany())
// Approach 2
import { company as x, getCompany as y } from './company1.js'
console.log(x)
console.log(y())
// Approach 3
import * as myCompany from './company1.js'
console.log(myCompany.getCompany())
console.log(myCompany.company)



const colors = fetch("../data/colors.json").then((response) => response.json());
//export default await colors;




// Named export kullanımı
// consumer.js
// Named export import edilmesi
import { name, helloNamed } from "./util.js";
// Değişken kullanımı
const myVar = name;
// Fonksiyon kullanımı
helloNamed();

// Default export kullanımı
// consumer.js
// Default export kullanımı
import helloDefault from "./util.js";
// Default export değişkenler özel olarak da isimlendirilebilir
import myFunction from "./util.js";
// İkisi de aynı çıktıyı verecektir
helloDefault();
myFunction();

