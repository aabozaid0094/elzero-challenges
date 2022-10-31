// Sort Names By Length And Letter Case
console.log("== Sort Names By Length And Letter Case ==");
let do_sort = (names) => {
    if (!Array.isArray(names)) return;
    let result = [];
    names.forEach((name) => {
        if (name.charAt(0) === "a" || name.charAt(0) === "A") result.push(name);
    });
    result.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    result.sort((a, b) => {
        if (a.charAt(0) > b.charAt(0)) {
            return -1;
        }
        if (a.charAt(0) < b.charAt(0)) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    return result;
};
// Test Cases
console.log(
    do_sort([
        "Ameer",
        "alsayed",
        "Mahmoud",
        "Ahmed",
        "ayman",
        "Israa",
        "Anas",
        "amal",
        "amr",
        "aml",
    ])
); // ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']
console.log("===============================");