for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
}

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

console.log("//")

let i2 = 0;
let n2 = 0;
while (i2 < 5) {
    i2++;
    if (i2 === 3) {
        continue;
    }
    n2 += i2;
    console.log(n2);
}
//1,3,7,12

const carsArray = ["Ford", "Porsche", "BMW", "Mercedes", "Lexus"];
const iterateThis = carsArray.forEach((car) => {
    console.log(car)
})
const mapThisArray = carsArray.map((car) => car + " is cool")
console.log(mapThisArray)


const array = [1, 2, 3];
for (const i in array) {
    console.log(i);
}


function getDayOfTheWeek(num) {
    switch (num) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
    }
} console.log(getDayOfTheWeek(4))// 'Thursday'