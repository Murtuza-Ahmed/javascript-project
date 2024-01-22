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
