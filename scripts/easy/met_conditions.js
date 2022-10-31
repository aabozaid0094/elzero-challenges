// Condition Met Challenge
console.log("== Condition Met Challenge ==");
let st = "Elzero Web School";
if (
    st.split("").some((element) => {
        element.toLowerCase() === "w";
        return true;
    })
) {
    console.log("Good");
}
if ((st.toUpperCase().includes("W") ? "w" : "") === "w") {
    console.log("Good");
}
if (typeof st.length !== "string") {
    console.log("Good");
}
if (typeof st.length === "number") {
    console.log("Good");
}
if (st.split(" ").shift().repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
console.log("===============================");