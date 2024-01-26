// exercise 12.1
let outputElement = document.getElementById("output");
let searchInput = document.getElementById("stext");
let replaceInput = document.getElementById("rtext");
let button = document.querySelector("button");
button.addEventListener("click", lookUp);
function lookUp() {
    let s = outputElement.textContent;
    let rt = replaceInput.value;
    let regex = new RegExp(searchInput, "g");
    let matches = s.match(regex);
    if (matches) {
        let updateText = s.replace(regex, rt);
        outputElement.textContent = updateText
    }
}