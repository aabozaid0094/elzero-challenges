// Word Before Last Length
console.log("== Word Before Last Length ==");
function wordBeforeLastLength(sentence) {
    const words = sentence.split(" ");
    const lengthyWords = [];
    if (words.length < 2) return false;
    words.forEach((word) => {
        if (word.length > 1) {
            lengthyWords.push(word);
        }
    });
    if (lengthyWords.length === 2) return words[0];
    return lengthyWords[lengthyWords.length - 2].length;
}

console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
console.log(wordBeforeLastLength("Hello")); // False
console.log(wordBeforeLastLength("Hello Elzero")); // Hello
console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello
console.log("===============================");