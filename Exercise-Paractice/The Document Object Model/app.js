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