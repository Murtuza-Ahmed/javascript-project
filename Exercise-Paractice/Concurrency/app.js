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
