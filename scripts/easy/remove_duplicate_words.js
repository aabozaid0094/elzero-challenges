// Remove Duplicate Words
console.log("== Remove Duplicate Words ==");
const remove_duplicate_words_from = (sentence)=>{
    const array_sentence = sentence.split(' ');
    let unique_array_sentence = [...new Set(array_sentence)];
    return unique_array_sentence.join(' ');
};
console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"));
console.log("===============================");