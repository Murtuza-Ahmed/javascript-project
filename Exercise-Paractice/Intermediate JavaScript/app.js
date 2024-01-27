// EXERCISE 12.1
// let outputElement = document.getElementById("output");
// let searchInput = document.getElementById("stext");
// let replaceInput = document.getElementById("rtext");
// let button = document.querySelector("button");
// button.addEventListener("click", lookUp);
// function lookUp() {
//     let s = outputElement.textContent;
//     let rt = replaceInput.value;
//     let regex = new RegExp(searchInput, "g");
//     let matches = s.match(regex);
//     if (matches) {
//         let updateText = s.replace(regex, rt);
//         outputElement.textContent = updateText
//     }
// }

// EXERCISE 12.2
let outputElement = document.querySelector(".output");
let inputElement = document.querySelector("input[type='text']");
let buttonCheck = document.querySelector("button");
buttonCheck.addEventListener("click", () => {
    let inputEmail = inputElement.value;
    let respons = "";
    let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
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