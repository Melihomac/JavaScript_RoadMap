// A collection of the values 1, 2 and 3
const arr = [1, 2, 3]

// Each value is related to one another, in the sense that each is indexed in a position of the array
const indexOfTwo = arr.indexOf(2)
console.log(arr[indexOfTwo - 1]) // 1
console.log(arr[indexOfTwo + 1]) // 3

// We can perform many operations on the array, like pushing new values into it
arr.push(4)
console.log(arr) // [1,2,3,4]

const array = ['a', 'b', 'c', 'd']
console.log(array[2]) // c

const obj = {
    prop1: "I'm",
    prop2: "an",
    prop3: "object"
}

const object = {
    prop1: "Hello!",
    prop3: function () {
        console.log("I'm a property dude!")
    }
}

console.log(obj.prop1); // I'm
object.prop3() // I'm a property dude

obj.prop4 = 125
obj["prop5"] = "The new prop on the block"
obj.prop6 = () => console.log("yet another example")

console.log(obj.prop4) // 125
console.log(obj["prop5"]) // "The new prop on the block"
obj.prop6() // "yet another example"

