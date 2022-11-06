// Get Previous Numbers Of Number
console.log("== Get Previous Numbers Of Number ==");
const get_previous_numbers = (number) => {
    if (isNaN(number)) return;
    if (number <= 0) return "Negative Numbers & Zero Not Allowed";
    let result = "";
    if (number<=10) {
        for (let index = number; index > 0; index--) {
            result += index.toString();
        }
        return parseInt(result);
    }
    result += number.toString();
    for (let index = number; index > 0; index--) {
        result += (!(index%2)) ? index.toString() : "";
    }
    return parseInt(result);
};
console.log(get_previous_numbers(0)); // "Negative Numbers & Zero Not Allowed"
console.log(get_previous_numbers(-20)); // "Negative Numbers & Zero Not Allowed"
console.log(get_previous_numbers(10)); // 10987654321
console.log(get_previous_numbers(17)); // 17161412108642
console.log("===============================");