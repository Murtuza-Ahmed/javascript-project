// EXERCISE 11.1
let darkMode = false;
document.getElementById("toggleButton").onclick = function () {
    toggleDarkMode();
};
function toggleDarkMode() {
    if (!darkMode) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#FFF";
    } else {
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "#000";
    }
    darkMode = !darkMode;
}

// EXERCISE 11.2
function changeBodyColor(color) {
    document.body.style.backgroundColor = color;
}
let colorDiv = document.querySelectorAll(".colorDiv");
colorDiv.forEach((colorDiv) => {
    // console.log(colorDiv)
    colorDiv.addEventListener("click", function () {
        let colorName = this.textContent.toLowerCase();
        // console.log(colorName)
        changeBodyColor(colorName);
    });
});


// exercise 11.3    (Attach window onload event)
function message(msg, event) {
    console.log(event, msg);
};
window.onload = function (event) {
    message("Window Ready", event);
};
function domContentLoadedHandler(event) {
    message("Document Ready", event);
}
document.addEventListener("DOMContentLoaded", domContentLoadedHandler);

// exercise 11.4 Mouse event handlers
let element = document.querySelector(".custom-element");
element.textContent = "Hello World";
element.style.width = "300px";
element.style.height = "150px";
function handelEvent(color, event) {
    console.log("COLOR:" + color)
    console.log("EVENT:" + event.type)
}
element.addEventListener("mousedown", (event) => {
    handelEvent("green", event);
    element.style.backgroundColor = "green";
});
element.addEventListener("mouseover", (event) => {
    handelEvent("red", event);
    element.style.backgroundColor = "red";
});
element.addEventListener("mouseout", (event) => {
    handelEvent("yellow", event);
    element.style.backgroundColor = "yellow";
});
element.addEventListener("mouseup", (event) => {
    handelEvent("blue", event);
    element.style.backgroundColor = "blue";
});

// exercise 11.5  The event target property
// let output = document.querySelector(".output");
// let input = document.querySelector("input[name='message']");
// let btn1 = document.querySelector("btn1")
// let btn2 = document.querySelector("btn2");
// let btn3Log = document.querySelector("btn3");
// let emptyArray = [];
// function logEventDetail(event) {
//     let logDetail = {
//         value: input.value,
//         type: event.type,
//         className: event.target.className,
//         tagName: event.target.tagName
//     };
//     emptyArray.push(logDetail);
//     output.textContent = `InputValue: ${input.value}`;
//     setTimeout(() => {
//         output.textContent = "";
//     }, 2000)
// }
// btn1.addEventListener("click", logEventDetail);
// btn2.addEventListener("click", logEventDetail);
// btn3Log.addEventListener("click", () => {
//     console.log("EVENT_LOG" + emptyArray);
// });