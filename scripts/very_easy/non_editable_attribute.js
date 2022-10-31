// Object Property Not Editable
console.log("== Object Property Not Editable ==");
const myObject = {
    a: 1,
    b: 2,
    c: 3,
};
// Write Code Here To Prevent Changing Of Property C Value
Object.defineProperty(myObject, "c", {
    value: myObject.c,
    writable: false,
});
myObject.c = 100;
console.log(myObject.c); // 3
console.log("===============================");