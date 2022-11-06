// Phone Number Pattern
console.log("== Phone Number Pattern ==");
const format_phone = (phone_array) => {
    if (!Array.isArray(phone_array)) return;
    if (phone_array.length !== 10) return "Invalid Phone Number";
    let result = "";
    phone_array.forEach((digit, index) => {
        switch (index) {
            case 0:
                result += "(";
                break;
            case 3:
                result += ") ";
                break;
            case 6:
                result += "-";
                break;
        }
        result += digit.toString();
    });
    return result;
};
console.log(format_phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //(123) 456-7890
console.log(format_phone([6, 2, 4, 7, 2, 1, 0, 2, 1, 1])); //(624) 721-0211
console.log(format_phone([1, 5, 5, 4, 9, 8, 6, 7, 1, 2, 1])); //Invalid Phone Number
console.log("===============================");