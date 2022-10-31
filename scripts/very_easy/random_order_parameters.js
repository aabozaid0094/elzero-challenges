// Parmeters Random Order
console.log("Parmeters Random Order");
let status = (parmeter1, parmeter2, parmeter3) => {
    let parmeters = [parmeter1, parmeter2, parmeter3];
    let variables = {
        name: { type: "string", value: null },
        age: { type: "number", value: null },
        hireable: { type: "boolean", value: null },
    };
    parmeters.forEach((parmeter) => {
        Object.keys(variables).forEach(function (key) {
            if (typeof parmeter == variables[key].type) {
                variables[key].value = parmeter;
            }
        });
    });
    console.log(
        `Hello ${variables.name.value}, Age Is ${variables.age.value}, ${
            !variables.hireable.value ? "Not " : ""
        }Available For Hire`
    );
};

status("Osama", 38, true); // "Hello Osama, Age Is 38, Available For Hire"
status(38, "Osama", true); // "Hello Osama, Age Is 38, Available For Hire"
status(true, 38, "Osama"); // "Hello Osama, Age Is 38, Available For Hire"
status(false, "Osama", 38); // "Hello Osama, Age Is 38, Not Available For Hire"
console.log("===============================");