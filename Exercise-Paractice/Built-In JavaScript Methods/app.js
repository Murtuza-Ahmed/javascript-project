// Decoding and encoding URIs

const faceBook = "https://www.facebook.com/profile.php?id=100094099460529";
const gitHub = "https://github.com/Murtuza-Ahmed";
const enCodedUrl = encodeURIComponent(faceBook);
const unCodeedUrl = decodeURIComponent(faceBook);
const enGit = encodeURIComponent(gitHub);
const unGit = decodeURIComponent(gitHub);
console.log(`ENCODE: ${enCodedUrl} \n UNCODE: ${unCodeedUrl} \n GITHUB-ENCODE: ${enGit} \n GITHUB-UNCODE: ${unGit}`);

// EXERCISE 8.2 (FILTER)
let friendNameArr = ["murtuza", "raza", "murtuza", "hamza", "hamza", "zubair", "raza", "umer", "sheroz"];
let filter = friendNameArr.filter((value, index, array) => {
    if (array.indexOf(value) === index) {
        return true;
    }
})
console.log(filter)
console.log(friendNameArr)

// EXERCISE 8.3 (MAP)
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let updateNumber = number.map((value) => {
    return value * 2;
})
let multiplyNumber = number.map(number => number * 2);
console.log(`OldNumber: ${number}\n UpdateNumber: ${updateNumber}\n MultiplyNumber: ${multiplyNumber}`);

// EXERCISE 8.4 (CAPITALIZE WORD)
let words = "hello Sheroz I am 24 years Young Boys And i learn fullsTack DIPloma in FUTURE";
function capitalizeWord(sentanceWord) {
    let lowerCaseWord = sentanceWord.toLowerCase();
    let capitalizeWordArray = [];
    let splitWord = lowerCaseWord.split(" ");
    splitWord.forEach((w) => {
        let upperWord = w.slice(0, 1).toUpperCase();
        let sliceWord = w.slice(1);
        let combineWord = upperWord + sliceWord;
        capitalizeWordArray.push(combineWord);
    });
    let joinWord = capitalizeWordArray.join(" ");
    return joinWord;
}
let wordInput = capitalizeWord(words);
console.log(wordInput);

// EXERCISE 8.5 (REPALCE)
let stringWord = "I lovE SHEROZ and I JAVAscRIpt LearN";
let vowel = ["a", "e", "i", "o", "u"]
let lowerWOrd = stringWord.toLowerCase();
for (let vowelWordChange of vowel) {
    let vowelWord = vowelWordChange;
    let vowelUpdateWord = lowerWOrd.replaceAll(vowelWord, vowel.indexOf());
    console.log(vowelUpdateWord);
}

// EXERCISE 8.7 (DATE)
let date = new Date();
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let getDate = date.getDate();
let getMonth = date.getMonth();
let getYear = date.getFullYear();
let monthNumaric = getMonth;
let monthName = monthArray[monthNumaric];
console.log("Date: " + getDate + " " + monthName + " " + getYear);

// Chapter projects (Word scrambler)
let word = "I Love JavaScript & I learn React";
function wordScramble(wordFun) {
    let tempWord = "";
    for (let w = 0; w <= wordFun.length; w++) {
        let rondamlyWord = Math.floor(Math.random() * wordFun.length);
        let rondamlyChar = wordFun.charAt(rondamlyWord);
        tempWord += rondamlyChar;
        wordFun = wordFun.substring(0, rondamlyWord) + wordFun.substring(rondamlyWord, 1);
        wordFun = wordFun.substring(0, w + 1) + wordFun.substring(w + 1);
    }
    return tempWord;
}
let finalWord = wordScramble(word);
console.log(finalWord);

// Countdown timer
let endDate = "2024-12-31T23:59:59";
function countDown() {
    let date = new Date(endDate);
    let currentDate = new Date();
    let totalSeconds = (date - currentDate) / 1000;
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return {
        days,
        hours,
        minutes,
        seconds
    };
}
function update() {
    let temp = countDown();
    let output = "";
    for (let unit in temp) {
        output += `${unit}: ${temp[unit]} \n`;
    }
    console.log(output);
    setTimeout(update, 1000);
}
update();