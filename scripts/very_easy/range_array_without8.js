// Range To Array Without 8
console.log("== Range To Array Without 8 ==");
let range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
};

let createArray = (start, end) => {
    if (Number.isInteger(start) && Number.isInteger(end)) {
        return range(start, end).filter((value) => value != 8);
    }
    return;
};

console.log(createArray(5, 10)); // Output [5, 6, 7, 9, 10]
console.log("===============================");