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