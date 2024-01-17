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
// let rendomNumber = Math.floor(Math.random() * 5);
// let userInput = prompt("Enter the Game");
// let userMessage = "";
// switch (rendomNumber) {
//     case 0:
//         userMessage = "igi";
//         break;
//     case 1:
//         userMessage = "8-ball";
//         break;
//     case 2:
//         userMessage = "snooker";
//         break;
//     case 3:
//         userMessage = "chess";
//         break;
//     case 4:
//         userMessage = "carrom";
//         break;
//     case 5:
//         userMessage = "GTA";
//         break;
//     default:
//         userMessage = "not play game";
//         break;
// }
// let find = `UserInput: ${userInput} ComputerGenrateGame: ${userMessage}`;
// console.log(find);

// EXERCISE 4.5
// let prize = +prompt("Enter The Number 1 to 10");
// let mySelection = "";
// switch (prize) {
//     case 1:
//     case 2:
//         mySelection = "Mubarak! ho Apne Toyota car jeeta he";
//         break;
//     case 3:
//     case 4:
//         mySelection = "Mubarak! ho Apne Mheran car jeeta he";
//         break;
//     case 5:
//     case 6:
//         mySelection = "Mubarak! ho Apne FX car jeeta he";
//         break;
//     case 7:
//     case 8:
//         mySelection = "Mubarak! ho Apne super bike jeeta he";
//         break;
//     case 9:
//     case 10:
//         mySelection = "Mubarak! ho Apne cicyle jeeta he";
//         break;
//     default:
//         mySelection = "TRY AGAIN";
//         break;
// }
// let finalFind = `User: ${prize} Selection: ${mySelection}`;
// console.log(finalFind);

// CHAPTER PROJECT
// let dynamicNumber = Math.floor(Math.random() * 10);
// let userNumber = +prompt("Enter the Number 0 to 10");
// let findHere = "";
// if (dynamicNumber > userNumber) {
//     findHere = "Chota He";
// } else if (dynamicNumber < userNumber) {
//     findHere = "Bara He";
// } else if (dynamicNumber === userNumber) {
//     findHere = "BaraBar He";
// } else {
//     findHere = "Please Input Number";
// }
// // dynamicNumber <= userNumber ? findHere = "bara he" : findHere = "chota he";
// let finalFindHere = `DynamicNumber: ${dynamicNumber} ApkaNumber: ${findHere} ${userNumber}`;
// console.dir(finalFindHere);

// Friend checker game
let userFriend = prompt("Enter the Friend Name");
friendLower = userFriend.toLowerCase();
let friendIn = "";
switch (friendLower) {
    case "murtuza":
        friendIn = "Murtuza-He";
        break;
    case "hamza":
        friendIn = "Hamza-He";
        break;
    case "umer":
        friendIn = "Umer-He";
        break;
    case "zubair":
        friendIn = "Zubair-He";
        break;
    case "talha":
    case "owais":
        friendIn = "Friend-He";
        break;
    default:
        friendIn = "No friend found";
        break;
}
let finalFriend = `Apka Dost ${friendIn}`
console.log(finalFriend);