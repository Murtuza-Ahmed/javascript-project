// Callbacks    exercise 13.1
const myName = ["sheroz"];
function greet(fullName) {
    console.log(`Hello, ${fullName.join(' ')}!`);
}
function processName(fullNameString, callback) {
    if (Array.isArray(fullNameString)) {
        const joinArrayName = fullNameString.join('');
        const fullNameArray = joinArrayName.split(' ');
        callback(fullNameArray);
        console.log('Callback function processing...');

    }
}
function greetingCallback(nameArray) {
    greet(nameArray);
}
processName(myName, greetingCallback);

// Promises     exercise 13.2
const startCountingPromises = new Promise((resolve) => {
    resolve("Start Counting");
});
function counter(value) {
    console.log(value)
};
startCountingPromises
    .then((result) => {
        counter(result);
        return 1;
    })
    .then((result) => {
        counter(result);
        return 2;
    })
    .then((result) => {
        counter(result);
        return 3
    })
    .then((result) => {
        counter(result);
    })
    .catch((error) => {
        console.error("ERROR: ", error)
    })

// async and await  exercise 13.3
let globalCounter = 0;
function timeOutFunction(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            globalCounter += 1;
            resolve({ counter: globalCounter, argumentValue: value })
        }, 1000);
    });
}
async function asyncFunction() {
    let result = await timeOutFunction(arguments);
    console.log("GlobalCounter", result.counter);
    console.log("ArgumentValue", result.argumentValue);
    return result;
}
for (let i = 1; i <= 10; i++) {
    asyncFunction(i).then((result) => {
        console.log("Result From Await", result);
    });
}