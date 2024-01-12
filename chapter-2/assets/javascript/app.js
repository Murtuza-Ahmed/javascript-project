let str = 'Sheroz';
let str1 = "Raza";
let val = undefined;
let val1 = null;
let val2;
let num = 1000;
console.log(`str: ${typeof (str)} \n str1: ${typeof (str1)} \n val: ${typeof (val)} \n val1: ${typeof (val1)} \n val2: ${typeof (val2)} \n num: ${typeof (num)}`);

var name = "ahmed";
var age = 25;
var weather = true;
console.log(`Hello! I'm ${name} I am ${age} Year Old In JavaScript ${weather}`);

// var a = +prompt("Enter the value of a");
// var b = +prompt("Enter the value of b");
// var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Value of c:", c);

var e = 5; // a
var f = 10; // b
var g = 20; // c
e += f;
e /= g;
g %= f;
console.log(`a: ${e} \n b: ${f} \n c: ${g}`);

// var mile = +prompt("Enter The Value");
// var kiloMiter = mile * 1.60934;
// console.log("Mile Convert KiloMeter", kiloMiter);

let height = +prompt("Enter the Height");
let weight = +prompt("Enter the weight");
let heightCm = 2.54;
let weightPound = 2.2046;
let calHeight = height * heightCm;
let calWeight = weight / weightPound;
let heightMe = calHeight / 100;
let bmi = calWeight / heightMe ** 2;
let fixBmi = bmi.toFixed(2);
console.log(`BMI: ${fixBmi}`);
