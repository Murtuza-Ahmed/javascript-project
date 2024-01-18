// EXERCISE 6.1
let num = 10;
let num1 = 15;
function numCre(a, b) {
    return a + b;
}
console.log(numCre(num, num1));
console.log(numCre(40, 10));

// EXERCISE 6.2
let descriptiveArr = ["Hi", "Hello", "Hy", "Beautyful", "Super", "Execllent"];
function friendName() {
    let nameInput = prompt("Enter the Name");
    let rendomArr = Math.floor(Math.random() * descriptiveArr.length);
    word = descriptiveArr[rendomArr];
    let final = `${word} ${nameInput}`;
    console.log(final);
}
friendName();