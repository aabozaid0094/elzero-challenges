// Numbers From Variables
console.log("== Numbers From Variables ==");
const numbers_from_variables = (extraction, ...variables) => {
    switch (extraction) {
        case 0:
            return parseInt(Math.min(...variables));
        case 1:
            return Math.pow(variables[0], parseInt(variables[3]));
        case 2:
            return parseInt(variables[3]);
        case 3:
            return Math.floor(parseFloat(variables[3]));
        case 4:
            return Math.round(variables[3]);
        case 5:
            return Math.trunc(variables[3]);
        case 6:
            const whole_number =
                Math.floor(variables[1]) / Math.ceil(variables[3]);
            return Math.round((whole_number + Number.EPSILON) * 100) / 100;
        case 7:
            return Math.ceil(Math.floor(variables[1]) / Math.ceil(variables[3]));
    }
};
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(numbers_from_variables(0, a, b, c, d)); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log(numbers_from_variables(1, a, b, c, d)); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(numbers_from_variables(2, a, b, c, d)); // 2
console.log(numbers_from_variables(3, a, b, c, d)); // 2
console.log(numbers_from_variables(4, a, b, c, d)); // 2
console.log(numbers_from_variables(5, a, b, c, d)); // 2
// Use Variables b + d To Get This Valus
console.log(numbers_from_variables(6, a, b, c, d)); // 66.67 => String
console.log(numbers_from_variables(7, a, b, c, d)); // 67 => Number
console.log("===============================");