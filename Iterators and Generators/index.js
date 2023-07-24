ranks = ["A", "B", "C", "D"]
for (let rank of ranks) {
    console.log(rank)
}


var numbers = [1, 2, 3, 4, 5];
var iterators = numbers[Symbol.iterator]();
iterators.next();



function* gen(x) {
    yield x;
    return
}
const generator = gen(2)
const genVal1 = generator.next()
console.log("genVal1", genVal1)
const genVal2 = generator.next()
console.log("genVal2", genVal2)
