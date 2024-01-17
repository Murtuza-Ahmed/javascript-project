// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// EXERCISE 5.1
let max = 10;
let genrateNumber = Math.floor(Math.random() * max) + 1;
console.log(genrateNumber)
let bool = false;
while (!bool) {
    let user = +prompt("Enter the Number 1 to 10");
    if (user === genrateNumber) {
        console.log("Match Number");
        bool = true;
    } else if (user < genrateNumber) {
        console.log("Your Number Small");
    } else if (user > genrateNumber) {
        console.log("Your Number Big")
    } else {
        console.log("Number Not Same! Try Again");
    }
}