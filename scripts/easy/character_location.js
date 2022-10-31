// Text Characters Location
console.log("== Text Characters Location ==");
let word_to_nums = (word)=>{
    const loweredWord = word.toLowerCase();
    let charsNumbers = [];
    for (let index = 0; index < loweredWord.length; index++) {
        charsNumbers.push(loweredWord.charCodeAt(index) - 96);
    }
    return charsNumbers;
};
// Tests
console.log('word_to_nums("Elzero")', word_to_nums("Elzero")); // "5 12 26 5 18 15"
console.log("===============================");