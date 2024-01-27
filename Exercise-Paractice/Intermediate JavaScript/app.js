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