// Find Longest Word
console.log("== Find Longest Word ==");
const longest_word_in = (sentence)=>{
    let longest = "";
    const array_sentence = sentence.split(' ');
    array_sentence.forEach(word => {
        longest = (word.length>longest.length)?word:longest;
    });
    return longest;
};
console.log(longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much"));
console.log("===============================");