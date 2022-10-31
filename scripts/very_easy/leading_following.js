// Leading and Following Existance
console.log("== Leading and Following Existance ==");
let check_leading_following = (to_check, to_check_against) => {
    return Array.isArray(to_check_against) && !isNaN(to_check)
        ? to_check_against.includes(to_check - 1) &&
              to_check_against.includes(to_check + 1)
        : false;
};

let arrayOfNumbers = [1, 2, 4, 10, 20, 12];
console.log(check_leading_following(11, arrayOfNumbers));
console.log(check_leading_following(3, arrayOfNumbers));
console.log(check_leading_following(5, arrayOfNumbers));
console.log("===============================");