let shopingArr = ["milk", "bread", "apple"];
console.log(shopingArr.length);
shopingArr.splice(1, 1, "bananas");
console.log(shopingArr);
let copyArr = shopingArr.slice(1, 2);
console.log(copyArr);
shopingArr.pop();
console.log(shopingArr);
shopingArr.shift();
console.log(shopingArr);
shopingArr.unshift("mango", "cherry");
console.log(shopingArr);
let sortArr = shopingArr.sort();
console.log(sortArr);
let reversArr = shopingArr.reverse();
console.log(reversArr);

let shopingListArr = [];
shopingListArr.unshift("milk", "bread", "apple");
shopingListArr.unshift("bread", "banana", "egg", "graps");
shopingListArr.pop();
shopingListArr.sort();
let indexArr = shopingListArr.indexOf("milk");
shopingListArr.splice(1, 0, "carrot", "lettuce");
let juiceArr = ["juice", "pop"];
let combineArr = shopingArr.concat(juiceArr);
console.log(shopingListArr);
console.log(juiceArr);
console.log(combineArr);