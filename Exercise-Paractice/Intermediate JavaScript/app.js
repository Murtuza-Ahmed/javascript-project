"use strict";
// EXERCISE 12.1
let outputEle = document.getElementById("output");
let searchInput = document.getElementById("stext");
let replaceInput = document.getElementById("rtext");
let button = document.getElementById("button");
button.addEventListener("click", lookUp);
function lookUp() {
    let s = outputEle.textContent;
    let rt = replaceInput.value;
    let regex = new RegExp(searchInput, "g");
    let matches = s.match(regex);
    if (matches) {
        let updateText = s.replace(regex, rt);
        outputEle.textContent = updateText
    }
}

// EXERCISE 12.2
let outputElement = document.querySelector(".output");
let inputElement = document.getElementById("email");
let buttonCheck = document.querySelector("button");
buttonCheck.addEventListener("click", () => {
    let inputEmail = inputElement.value;
    let respons = "";
    let emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    let emailCheck = inputEmail.match(emailPattern);
    if (emailCheck) {
        respons = "Valid Email";
        outputElement.style.color = "green";
    } else {
        respons = "Invalid Email";
        outputElement.style.color = "red";
    }
    console.log(respons)
    outputElement.textContent = respons;
})

// DEBUGING
let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);
function adder() {
    let counter = val;
    for (let i = 0; i < val; i++) {
        counter++;
    }
    return counter;
}

// ERROR hANDLING   ESERCISE 12.5
function checkNumber(val) {
    try {
        if (isNaN(val)) {
            throw new Error("not a number")
        } else {
            console.log("got a number")
        }
    } catch (error) {
        console.error(error.message)
    } finally {
        console.log("Value", val)
    }
}
checkNumber("hello");
checkNumber(5);

// Local storage
let message = "Hello Storage";
localStorage.setItem("example", message);
if (localStorage.getItem("example")) {
    document.getElementById("stored").innerHTML =
        localStorage.getItem("example");
}