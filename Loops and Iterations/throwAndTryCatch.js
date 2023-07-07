const number = 40;
try {
    if (number > 50) {
        console.log('Success');
    }
    else {
        // user-defined throw statement
        throw new Error('The number is low');
    }
    // if throw executes, the below code does not execute
    console.log('hello');
}
catch (error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}