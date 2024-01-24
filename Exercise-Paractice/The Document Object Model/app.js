// EXERCISE 9.1
console.dir(window);
let documentObject = window.document;
console.log(`documentObject: ${documentObject}`);
let innerHeightW = window.innerHeight;
let innerWidthW = window.innerWidth;
let outerHeightW = window.outerHeight;
let outerWidthW = window.outerWidth;
console.log(`InnerHeight: ${innerHeightW} \n InnerWidth: ${innerWidthW} \n OuterHeight: ${outerHeightW} \n OuterWidth: ${outerWidthW}`);

// EXERCISE 9.2
let locationWin = window.location;
console.log(locationWin);
let proto = locationWin.protocol;
let her = locationWin.href;
console.log(`Protocol: ${proto} \n Href: ${her}`);
let endCode = encodeURIComponent(her);
console.log(endCode);
let diCode = decodeURIComponent(her);
console.log(diCode);

// EXERCISE 9.3
// let inputClass = document.querySelector("div");
// inputClass.textContent = "The Paractice of DOM";
// inputClass.classList.add("red");
// inputClass.id = "tester";
// inputClass.style.backgroundColor = "red";
// inputClass.style.color = "#fff";
// let documentUrl = document.URL;
// console.log(documentUrl);
// console.log(inputClass)

// Chapter project
// let divOutPut = document.getElementsByClassName("output");
// let mainList = {
//     uniqe: document.querySelector("ul")
// }
// mainList.uniqe.id = "list";
// let divTagName = document.querySelectorAll("div");
// let textArray = [];
// let text = divTagName.innerText;
// textArray.push(text);
// for (let i = 0; i <= divTagName.length; i++) {
//     let currentDiv = divTagName[i];
//     currentDiv.id = i + 1;
//     currentDiv.style.color = i % 2 === 0 ? "red" : "blue";
//     console.log(currentDiv)

// }





// CHAPTER-(10) DYNAMIC ELEMENT MANIPULATION USING THE DOM

// exercise 10.1
// console.dir(document);
// let bdyDocument = document.body.children;
// let first = bdyDocument[0]
// let nextSibling = first.nextElementSibling;
// let sibling = first.nextSibling;
// console.log(`BodyDocument: ${bdyDocument} \n BodyFirstDocument: ${first}\n BodyNextSibling: ${nextSibling}\n BodySibling: ${sibling}`);
// console.log(bdyDocument)
// console.log(first)
// console.log(nextSibling)
// console.log(sibling)

// EXECISE 10.2
// let one = document.getElementById("one");
// console.log(one);

// EXERCISE 10.3
// let pageElement = document.querySelectorAll("li")
// let liArray = pageElement[Math.floor(pageElement.length / 2)];
// console.log(liArray.textContent)

// EXERCISE 10.4
// let classContent = document.getElementsByClassName("content");
// let selectClassContent = classContent[1];
// console.log(selectClassContent)

// EXERCISE 10.7
function message(element) {
    console.dir(element);
    console.log(element);
}

// EXERCISE 10.8
let nameArray = ["murtuza", "hamza", "umer", "zubair", "raza", "ahmed", "mustufa", "sheroz"];
let pageMessage = document.getElementById("message");
let table = document.getElementById("html");
function build() {
    for (let i = 0; i <= nameArray.length; i++) {
        let row = table.insertRow();
        row.setAttribute("data-row", i);
        row.setAttribute("data-name", nameArray[i]);
        row.onclick = function () {
            getData(this);
        }
        let cell = row.insertCell();
        cell.innerHTML = nameArray[i];
        // if (i % 2 === 0) {
        //     cell.classList.add("box")
        // }
    }
}
build();
function getData(element) {
    let rowIndex = element.getAttribute("data-row");
    let nameValue = element.getAttribute("data-name");
    pageMessage.innerHTML = "Row Index: " + rowIndex + ", Name: " + nameValue;
}

// EXERCISE 10.9
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    function output() {
        console.log(this.textContent);
    }
    button.addEventListener("click", output);
});

// EXERCISE 10.10
document.addEventListener("DOMContentLoaded", function () {
    let addItemIn = document.getElementById("addItem");
    let addNewIn = document.getElementById("addNew");
    let sListIn = document.getElementById("sList");
    addNewIn.addEventListener("click", addListBtn);
    function addListBtn() {
        let inputValue = addItemIn.value;
        if (inputValue !== "") {
            let listIem = document.createElement("li");
            let textNode = document.createTextNode(inputValue);
            listIem.appendChild(textNode);
            sListIn.appendChild(listIem)
            addItemIn.value = "";
        };
    };
});