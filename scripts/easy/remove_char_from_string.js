// Remove Character From String
console.log("== Remove Character From String ==");
const remove_char_from = (word, c)=>{
    const array_word = word.split('');
    let array_word_cleaned = [];
    array_word.forEach(char => {
        if (char.toUpperCase() !== c.toUpperCase()) {
            array_word_cleaned.push(char);
        }
    });
    return array_word_cleaned.join('');
};
console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d")) // Elzero Web School
console.log(remove_char_from("ElxzeroX Web Sxchool", "x")) // Elzero Web School
console.log(remove_char_from("Elzero@ Web@@ @@School", "@")) // Elzero Web School
console.log("===============================");