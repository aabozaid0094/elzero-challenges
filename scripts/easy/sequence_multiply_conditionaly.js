// Sequence Multiply With Condition
console.log("== Sequence Multiply With Condition ==");
function seq_multi(num, counts, exclude) {
    let products = [];
    products.push(num);
    for (let index = 0; index < counts-1; index++) {
        num *= num;
        if(num!==exclude)
            products.push(num);
    }

    return products;
}

// Test Cases
console.log(seq_multi(2, 5, 256)); // [2, 4, 16, 65536]
console.log(seq_multi(3, 4, 6561)); // [3, 9, 81]
console.log("===============================");