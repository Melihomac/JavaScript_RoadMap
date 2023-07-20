function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}
asyncCall();

async function myFunction() {
    return "Hello";
}
//Is the same as:
function myFunction() {
    return Promise.resolve("Hello");
}

async function f() {
    return 1;
}
f().then(console.log(f())); // 1

async function f() {
    return Promise.resolve(1);
}
f().then(console.log(f())); // 1

// Callback Hell
setTimeout(() => {
    console.log("One Second");
    setTimeout(() => {
        console.log("Two Seconds");
        setTimeout(() => {
            console.log("Three Seconds");
            setTimeout(() => {
                console.log("Four Seconds");
                setTimeout(() => {
                    console.log("Five Seconds");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


let lottery = new Promise(function (resolve, reject) {
    console.log("Lottery is happening");
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve("You Won!!!")
        }
        else {
            reject("Better luck next time")
        }
    }, 5000);
})
lottery.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})


async function foo() {
    return 1;
}
//It is similar to:
function foo() {
    return Promise.resolve(1);
}



async function foo() {
    await 1;
}
//It is also equivalent to:
function foo() {
    return Promise.resolve(1).then(() => undefined);
}



let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First Promise")
    }, 2000)
})
let promise2 = Promise.resolve("Second Promise")
let returnedPromises = Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
})


async function f() {
    try {
        // let response = await fetch('http://no-such-url');
        // let user = response.json();
    } catch (err) {
        console.log(err); // TypeError: failed to fetch
    }
}
f();

