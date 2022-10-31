// Count Negative And Sum Positive And Sort String
console.log("== Count Negative And Sum Positive And Sort String ==");
let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

function getResult(arr) {
    if(!Array.isArray(arr)) return;
    let result = [0, 0, ""];
    arr.forEach(element => {
        if (typeof(element) === "string") {
            result[2] += element;
        }
        else if (typeof(element) === "number") {
            if (element>=0) {
                result[0] += element;
            }
            else{
                result[1]++;
            }
        }
    });
    result[2] = result[2].split('').sort().join('');
    return result;
}

console.log(getResult(arr));
// Ouput [39, 3, 'ACZ']
console.log("===============================");