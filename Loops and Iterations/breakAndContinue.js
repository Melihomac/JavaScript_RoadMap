for (let i = 0; i < 10; i++) {
    if (i === 3) { break; } // 3e gelince loop dışına çıkar
    console.log("The number is " + i)
}
// The number is 0
// The number is 1
// The number is 2

for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; } // 3 es geçer
    console.log("The number is " + i)
}
// The number is 0
// The number is 1
// The number is 2
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9