// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// EXERCISE 5.1
// let max = 10;
// let genrateNumber = Math.floor(Math.random() * max) + 1;
// console.log(genrateNumber)
// let bool = false;
// while (!bool) {
//     let user = +prompt("Enter the Number 1 to 10");
//     if (user === genrateNumber) {
//         console.log("Match Number");
//         bool = true;
//     } else if (user < genrateNumber) {
//         console.log("Your Number Small");
//     } else if (user > genrateNumber) {
//         console.log("Your Number Big")
//     } else {
//         console.log("Number Not Same! Try Again");
//     }
// }

// EXERCISE 5.2
// let counter = 0;
// let step = 1;
// counter = counter + step;
// counter += step; // Short Hand
// // console.log(counter)
// do {
//     console.log(counter);
//     counter++;
// } while (counter <= 10)

// EXERCISE 5.3
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var updateStatus = i % 2 === 1 ? false : true;
    var obj = {
        name: `lesson:${i}`,
        status: updateStatus
    }
    myWork.push(obj);
}
console.log(myWork);

// EXERCISE 5.4
// let arrOfArray = [];
// for (let i = 0; i < 5; i++) {
//     arrOfArray.push([]);
//     for (let j = 0; j < 10; j++) {
//         arrOfArray[i].push(j);
//     }
// }
// console.table(arrOfArray);

let myTable = [];
let numRow = 5;
let numCol = 5;
let counter = 0;
for (let row = 0; row < numRow; row++) {
    let tempArray = [];
    for (let col = 0; col < numCol; col++) {
        counter++;
        tempArray.push(counter);
        myTable.push(tempArray);
    }
}
console.table(myTable);