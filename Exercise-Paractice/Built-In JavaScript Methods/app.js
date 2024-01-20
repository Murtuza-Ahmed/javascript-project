// Decoding and encoding URIs

const faceBook = "https://www.facebook.com/profile.php?id=100094099460529";
const gitHub = "https://github.com/Murtuza-Ahmed";
const enCodedUrl = encodeURIComponent(faceBook);
const unCodeedUrl = decodeURIComponent(faceBook);
const enGit = encodeURIComponent(gitHub);
const unGit = decodeURIComponent(gitHub);
console.log(`ENCODE: ${enCodedUrl} \n UNCODE: ${unCodeedUrl} \n GITHUB-ENCODE: ${enGit} \n GITHUB-UNCODE: ${unGit}`);
