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

// DOM event flow
function bubble() {
    console.log(this.innerText);
}
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", bubble);
}

// onchange and onblur
function logEvent() {
    let p = event.target;
    if (p.name === "firstname") {
        message("First Name Changed to " + p.value);
    } else {
        message("Last Name Changed to " + p.value);
    }
}
function sendInfo() {
    let p = event.target.parentElement;
    message("Welcome " + p.firstname.value + " " + p.lastname.value)
}
function message(m) {
    document.getElementById("welcome").innerHTML = m;
}

// exercise 11.7  onchange and onblur
let firstNameInput = document.querySelector("input[name='first']");
let lastNameInput = document.querySelector("input[name='last']");
let outputUpdate = document.querySelector("output1");
firstNameInput.addEventListener("change", handelInputChange);
lastNameInput.addEventListener("change", handelInputChange);
firstNameInput.addEventListener("blur", eventHandel);
firstNameInput.addEventListener("focus", eventHandel);
lastNameInput.addEventListener("blur", eventHandel);
lastNameInput.addEventListener("focus", eventHandel);
function handelInputChange(event) {
    let InputValue = event.target.value;
    updateOutput(InputValue);
}
function eventHandel(event) {
    console.log(`EventType: ${event.type} Value: ${event.target.value}`)
}
function updateOutput(content) {
    outputUpdate.textContent = content
}

// Key event handler
function numCheck() {
    message("Number: " + !isNaN(event.key));
    return !isNaN(event.key);
}
function numCheck2() {
    message("Not a number: " + isNaN(event.key));
    return isNaN(event.key);
}
function message(m) {
    document.getElementById('wrapper').innerHTML = m;
}

// exercise 11.8 Key event handler
document.addEventListener("DOMContentLoaded", function () {
    let output = document.querySelector(".outPut");
    let inputField = document.querySelectorAll("input-field");
    inputField.forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (isNumeric(event.key)) {
                output.innerHTML += event.key;
            }
        });
        input.addEventListener("keyup", (event) => {
            console.log("Key Prased", event.key);
        });
        input.addEventListener("paste", () => {
            console.log("paste dedacted");
        });
    });
    function isNumeric(key) {
        return !isNaN(parseFloat(key)) && isFinite(key)
    }
});

// Drag and drop elements
let holderItem;
function dStart() {
    holderItem = event.target;
}
function nDrop() {
    event.preventDefault();
}
function dDrop() {
    event.preventDefault();
    if (event.target.className == "box") {
        event.target.appendChild(holderItem);
    }
}

// Form submission
let q = window.location.search;
let params = new URLSearchParams(q);
let name = params.get("name");
console.log(name);

// Form submission
function valForm() {
    var p = event.target.children;
    if (p.firstName.value === "") {
        message("Need a first name!!");
        return false;
    }
    if (p.lastName.value === "") {
        message("Need a last name!!");
        return false;
    }
    if (p.age.value === "") {
        message("Need an age!!");
        return false;
    }
    return true;
}
function message(m) {
    document.getElementById("wrapper").innerHTML = m;
}


// Animating elements
function toTheRight() {
    let b = document.getElementById("block");
    let x = 0;
    setInterval(function () {
        if (x === 600) {
            clearInterval();
        } else {
            x++;
            b.style.left = x + "px";
        }
    }, 2);

}

// exercise 11.11
document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("movingElement");
    var movement = {
        speed: 5,
        direction: 1,
        position: 0
    };
    element.addEventListener("click", function () {
        var intervalCounter = 30;
        var interval = setInterval(function () {
            if (intervalCounter < 1) {
                clearInterval(interval);
            }
            if (intervalCounter === 30) {
                intervalCounter--;
                return;
            }
            if (movement.position > 800 || movement.position < 0) {
                movement.direction *= -1;
            }
            movement.position += movement.speed * movement.direction;
            element.style.left = movement.position + "px";
            console.log("Position:", movement.position);
            intervalCounter--;
        }, 100);
    });
});

// Chapter projects (Build your own analytics)
document.addEventListener('DOMContentLoaded', function () {
    var clickTrackingArray = [];
    var mainContainer = document.getElementById('main-container');
    mainContainer.addEventListener('click', function (event) {
        var targetElement = event.target;
        if (targetElement.id !== 'main-container') {
            var trackingObject = {
                textContent: targetElement.textContent,
                id: targetElement.id,
                tagName: targetElement.tagName,
                className: targetElement.className,
            };
            clickTrackingArray.push(trackingObject);
            console.log(clickTrackingArray);
        }
    });
});

// CHAPTER PROJECT  (Star rating system)
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector('.stars');
    const outputElement = document.querySelector('.output');
    const starElements = document.querySelectorAll('.star');
    starElements.forEach((star, index) => {
        star.starValue = index + 1;
        star.addEventListener('click', starRate);
    });
    function starRate(event) {
        const starValue = event.target.starValue;
        outputElement.textContent = `You rated this ${starValue} out of 5 stars`;
        starElements.forEach((star, index) => {
            if (index < starValue) {
                star.classList.add('orange');
            } else {
                star.classList.remove('orange');
            }
        });
    }
});
