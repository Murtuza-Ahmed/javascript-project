"use strict";
// // EXERCISE 12.1
// let outputEle = document.getElementById("output");
// let searchInput = document.getElementById("stext");
// let replaceInput = document.getElementById("rtext");
// let button = document.getElementById("button");
// button.addEventListener("click", lookUp);
// function lookUp() {
//     let s = outputEle.textContent;
//     let rt = replaceInput.value;
//     let regex = new RegExp(searchInput, "g");
//     let matches = s.match(regex);
//     if (matches) {
//         let updateText = s.replace(regex, rt);
//         outputEle.textContent = updateText
//     }
// }

// // EXERCISE 12.2
// let outputElement = document.querySelector(".output");
// let inputElement = document.getElementById("email");
// let buttonCheck = document.querySelector("button");
// buttonCheck.addEventListener("click", () => {
//     let inputEmail = inputElement.value;
//     let respons = "";
//     let emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
//     let emailCheck = inputEmail.match(emailPattern);
//     if (emailCheck) {
//         respons = "Valid Email";
//         outputElement.style.color = "green";
//     } else {
//         respons = "Invalid Email";
//         outputElement.style.color = "red";
//     }
//     console.log(respons)
//     outputElement.textContent = respons;
// })

// // DEBUGING
// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder() {
//     let counter = val;
//     for (let i = 0; i < val; i++) {
//         counter++;
//     }
//     return counter;
// }

// // ERROR hANDLING   ESERCISE 12.5
// function checkNumber(val) {
//     try {
//         if (isNaN(val)) {
//             throw new Error("not a number")
//         } else {
//             console.log("got a number")
//         }
//     } catch (error) {
//         console.error(error.message)
//     } finally {
//         console.log("Value", val)
//     }
// }
// checkNumber("hello");
// checkNumber(5);

// // Local storage
// let message = "Hello Storage";
// localStorage.setItem("example", message);
// if (localStorage.getItem("example")) {
//     document.getElementById("stored").innerHTML =
//         localStorage.getItem("example");
// }

// EXERCISE 12.7
// // Qadam 1: Saare page elements ko JavaScript objects ke tor par select karein
// const newItemInput = document.getElementById("newItemInput");
// const taskList = document.getElementById("taskList");
// // Qadam 2: Tasks array ko local storage se hasil karein ya khali array ke tor par initialize karein
// let tasks = JSON.parse(localStorage.getItem('tasklist')) || [];
// // Qadam 3: Function banayein jo task item ko page mein shamil kare aur usay build kare
// function buildTask(task) {
//     const listItem = document.createElement("li");
//     const textNode = document.createTextNode(task.name);
//     listItem.appendChild(textNode);
//     taskList.appendChild(listItem);
//     if (task.checked) {
//         listItem.classList.add("ready");
//     }
//     // Qadam 5: Toggle event listener jodne ke liye, jo ready class ko badalay aur local storage ko update kare
//     listItem.addEventListener("click", function () {
//         listItem.classList.toggle("ready");
//         task.checked = !task.checked;
//         saveTasks();
//     });
// }
// // Qadam 6: Visual data se task list array ko rebuild karne ke liye function banayein
// function buildTaskList() {
//     tasks = [];
//     const listItems = document.querySelectorAll("#taskList li");
//     listItems.forEach((item) => {
//         const task = {
//             name: item.textContent,
//             checked: item.classList.contains("ready")
//         };
//         tasks.push(task);
//     });
//     saveTasks();
// }
// // Qadam 7: Local storage mein tasks array ko save karne ke liye function banayein
// function saveTasks() {
//     localStorage.setItem('tasklist', JSON.stringify(tasks));
// }
// // Qadam 8: Page load par mojood tasks ko display karein
// tasks.forEach(buildTask);
// // Qadam 4: Naya item task list mein shamil karne ke liye function banayein
// function addItem() {
//     const itemName = newItemInput.value.trim();
//     if (itemName !== "") {
//         const newTask = {
//             name: itemName,
//             checked: false
//         };
//         tasks.push(newTask);
//         buildTask(newTask);
//         newItemInput.value = "";
//         saveTasks();
//     }
// }

// JSON        EXERCISE 12.8
let jsonObject = {
    person1: {
        name: "sheroz",
        status: "active"
    },
    person2: {
        name: "sheikh",
        status: "Inactive"
    }
}
function displayData(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log("Name" + object[key].name, "Status" + object[key].status)
        }
    }
}
displayData(jsonObject);

// PARSING JSON
let str = "{\"name\": \"Maaike\", \"age\": 30}";
let convertJsonFile = JSON.parse(str);
console.log(convertJsonFile)