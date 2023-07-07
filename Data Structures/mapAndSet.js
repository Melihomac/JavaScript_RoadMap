let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.get(true)); // bool1
console.log(map.size); // 3

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});

let obj = {
    name: "John",
    age: 30
};
let map2 = new Map(Object.entries(obj));
console.log(map2.get('name')); // John

// SET

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
}

let set2 = new Set(["oranges", "apples", "bananas"]);

// the same with forEach:
set2.forEach((value, valueAgain, set2) => {
    console.log(value);
});

const ids = new Set([3, 6, 9, 7]);
console.log(ids);

const player = new Map([['key', 'value'], ['key2', 'value2']]);
console.log(player);

const players = new Map([['key', 'value'], ['small', 'medium'], ['fruit', 'another']]);

players.forEach((key, value) => {
    const message = `I want to be remeembered as the best ${key} pair ${value}`;
    console.log(message)
})

