var bool = false;
console.dir(!bool);
if (!bool) {
    console.log("open the umbrella");
} else {
    console.log("close the umbrella");
}

// EXERCISE 4.2
let userAge = parseInt(prompt("Enter the Age"));
let message = "";
if (userAge >= 21) {
    message = "purchase alcohol";
} else if (userAge >= 19) {
    message = "not purchase alcohol";
} else {
    message = "not entry"
}
console.log(message);

// EXERCISE 2.3
// let bool = false;
let response = "";
let answer = !bool ? response = "allow" : response = "not";
console.log(`Answer: ${answer} Response: ${response}`);

let finalRequest = userAge >= 20 ? answer = "true" : answer = "false";
console.log(finalRequest);