// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
outer: for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        console.log(`I: ${i} J:${j}`)
        if (i === 2 && j === 2) {
            break outer;
        }
    }
}


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

// let myTable = [];
// let numRow = 5;
// let numCol = 5;
// let counter = 0;
// for (let row = 0; row < numRow; row++) {
//     let tempArray = [];
//     for (let col = 0; col < numCol; col++) {
//         counter++;
//         tempArray.push(counter);
//         myTable.push(tempArray);
//     }
// }
// console.table(myTable);

// EXERCISE 5.5
let grid = [];
let rowCell = 64;
let counter = 0;
let row = [];
for (let i = 1; i <= rowCell; i++) {
    if (counter % 8 === 0) {
        if (row !== undefined) {
            grid.push(row);
        }
        if (counter % 8 === 0) {
            row = []
        }
    }
    counter++;
    let tempArray = counter;
    row.push(tempArray);
    if (counter === 8) {
        grid.push(row);
    }
}
console.table(grid)

// EXERCISE 5.6
let emptyArray = [];
for (let i = 1; i <= 10; i++) {
    emptyArray.push(i + 1);
}
for (let j = 1; j < emptyArray.length; j++) {
    console.log(`MyArray: ${emptyArray[j]}`);
}
for (let arr of emptyArray) {
    console.log(arr);
}
console.log(emptyArray);

// EXERCISE 5.7
let simpleObj = {
    car: "civic",
    color: "black",
    model: 2012,
    company: "toyota"
};
for (let obj in simpleObj) {
    console.log("Key", obj, "Value", simpleObj);
}
let simpleArr = ["car", "civic", "color", "black", "model", "2012", "company", "toyota"];
for (let arr in simpleArr) {
    console.log(arr, simpleArr[arr])
}

// EXERCISE 5.8
let output = "";
let skipNumber = 5;
for (let i = 1; i <= 10; i++) {
    if (i === skipNumber) {
        continue;
    }
    output += i;
}
console.log(output)
for (let count = 1; count <= 10; count++) {
    if (count === skipNumber) {
        break;
    }
    output += count;
}
console.log(output)

// Chapter project Math multiplication table
let multiplicationArray = [];
let valueNum = 5;
for (let i = 1; i <= valueNum; i++) {
    let rowArray = [];
    for (let j = 1; j <= valueNum; j++) {
        rowArray.push(i * j);
    }
    multiplicationArray.push(rowArray);
}
console.table(multiplicationArray);