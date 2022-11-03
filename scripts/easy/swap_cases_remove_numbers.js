// Swap Cases And Remove Numbers
console.log("== Swap Cases And Remove Numbers ==");
const swapping = (word)=>{
    let swapped = "";
    const array_word = word.split('');
    array_word.forEach(char => {
        if (char>='0' && char<='9') {}
        else if (char==char.toUpperCase()) swapped += char.toLowerCase();
        else if (char==char.toLowerCase()) swapped += char.toUpperCase();
        else swapped += char;
    });
    return swapped;
}
console.log(swapping("HellO")); // hELLo
console.log(swapping("WOrld")); // woRLD
console.log(swapping("12ProGRAM12")); // pROgram
console.log("===============================");