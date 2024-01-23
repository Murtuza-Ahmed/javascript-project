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
let inputClass = document.querySelector("div");
inputClass.textContent = "The Paractice of DOM";
inputClass.classList.add("red");
inputClass.id = "tester";
inputClass.style.backgroundColor = "red";
inputClass.style.color = "#fff";
let documentUrl = document.URL;
console.log(documentUrl);
console.log(inputClass)