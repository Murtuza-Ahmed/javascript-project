// EXERCISE 6.1
let num = 10;
let num1 = 15;
function numCre(a, b) {
    return a + b;
}
console.log(numCre(num, num1));
console.log(numCre(40, 10));

// EXERCISE 6.2
// let descriptiveArr = ["Hi", "Hello", "Hy", "Beautyful", "Super", "Execllent"];
// function friendName() {
//     let nameInput = prompt("Enter the Name");
//     let rendomArr = Math.floor(Math.random() * descriptiveArr.length);
//     word = descriptiveArr[rendomArr];
//     let final = `${word} ${nameInput}`;
//     console.log(final);
// }
// friendName();

// EXERCISE 6.3
// let calcuNum = +prompt("Enter the NUMBER");
// let calcuNum1 = +prompt("Enter the NUMBER");
// let operator = "+ | - | * | /";
// let multiple = prompt(`Enter the ${operator}`);
// function calculator(num, num1, multiplication) {
//     if (multiplication === "+") {
//         return num + num1;
//     } else if (multiplication === "-") {
//         return num - num1;
//     } else if (multiplication === "*") {
//         return num * num1;
//     } else if (multiplication === "/") {
//         return num / num1;
//     } else {
//         return num + num1;
//     }
// }
// let finalCal = calculator(calcuNum, calcuNum1, multiple);
// console.log(finalCal);

// EXERCISE 6.4
let calArr = [];
for (let count = 1; count <= 10; count++) {
    let val = count * 5;
    let val1 = count * count;
    function add(a, b) {
        return a + b;
    }
    let result = add(val, val1);
    calArr.push(result);
}
console.log(calArr);

// EXERCISE 6.5
let value = "1000";
(function () {
    let value = "New IIFE";
    console.log(value);
})();

let result = (function () {
    let value = "New life IIFE";
    return value;
})();
console.log(result);

let anonymusFun = function (paraValue) {
    value = paraValue
    console.log(value);
}

// EXERCISE 6.6
// function factorial(value) {
//     if (value === 0) {
//         return 1;
//     } else {
//         return value * factorial(value - 1);
//     }
// }
// function repeatFactorial() {
//     for (let g = 0; g <= 5; g++) {
//         console.log(`Factorial: ${g} Factoral: ${factorial(g)}`);
//     }
// }
// repeatFactorial();

// EXERCISE 6.6
function factorial(val) {
    if (val === 0) {
        return 1;
    } else {
        return val * factorial(val - 1);
    }
}
// factorial(1);
function callFactorial() {
    for (let a = 0; a <= 5; a++) {
        console.log(`CallFactoral: ${a} Factorial: ${factorial(a)}`);
    }
}
callFactorial(1);

// EXERCISE 6.7
let start = 10;
function nastedCount(para) {
    if (para < 10) {
        return;
    }
    if (para > 10) {
        para--;
        return nastedCount(para);
    }
}
console.log(nastedCount(start));

// EXERCISE 6.8
let fun = (e) => {
    console.log(e);
};
fun(5);

// CALL BACK FUNCTION
function calBack(para) {
    para();
    console.log("hello")
}
calBack(function () {
    console.log("world");
});

function callBack(para) {
    if (typeof para === "function") {
        para();
    } else {
        console.log("is not function");
    }
    console.log("its try")
}
callBack(function () {
    console.log("world")
});

// Chapter projects
function count(e) {
    console.log(e);
    if (e > 10) {
        return;
    }
    console.log(e);
    count(e + 1);
}
count(1);
count(8);
count(3);
count(6);

// Set timeout order
const arrowFuncOne = () => {
    console.log("one")
}
const arrowFuncTwo = () => {
    console.log("two")
}
const arrowFuncThree = () => {
    console.log("three")
}
const arrowFuncFour = x => {
    console.log(x)
    setTimeout(() => {
        console.log("five")
    }, 1000)
}
arrowFuncOne();
arrowFuncTwo();
arrowFuncThree();
arrowFuncFour("four");
setTimeout(arrowFuncOne, 1000);