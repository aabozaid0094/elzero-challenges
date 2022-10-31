// Array Methods Challenge
console.log("== Array Methods Challenge ==");
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]
console.log(my[zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"
console.log(-counter);
console.log(
    my[counter].slice(-counter, -++zero) +
        my[counter].slice(-zero).toUpperCase()
); // "rO"
console.log("===============================");