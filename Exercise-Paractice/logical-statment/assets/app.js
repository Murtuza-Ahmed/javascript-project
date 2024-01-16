var bool = false;
console.dir(!bool);
if (!bool) {
    console.log("open the umbrella");
} else {
    console.log("close the umbrella");
}

// EXERCISE 4.2
// let userAge = parseInt(prompt("Enter the Age"));
// let message = "";
// if (userAge >= 21) {
//     message = "purchase alcohol";
// } else if (userAge >= 19) {
//     message = "not purchase alcohol";
// } else {
//     message = "not entry"
// }
// console.log(message);

// EXERCISE 4.3
// let bool = false;
let response = "";
let answer = !bool ? response = "allow" : response = "not";
console.log(`Answer: ${answer} Response: ${response}`);

// let finalRequest = userAge >= 20 ? answer = "true" : answer = "false";
// console.log(finalRequest);

// EXERCISE 4.4
let rendomNumber = Math.floor(Math.random() * 5);
let userInput = prompt("Enter the Game");
let userMessage = "";
switch (rendomNumber) {
    case 0:
        userMessage = "igi";
        break;
    case 1:
        userMessage = "8-ball";
        break;
    case 2:
        userMessage = "snooker";
        break;
    case 3:
        userMessage = "chess";
        break;
    case 4:
        userMessage = "carrom";
        break;
    case 5:
        userMessage = "GTA";
        break;
    default:
        userMessage = "not play game";
        break;
}
let find = `UserInput: ${userInput} ComputerGenrateGame: ${userMessage}`;
console.log(find);