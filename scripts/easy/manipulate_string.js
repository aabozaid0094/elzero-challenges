// String Manipulation
console.log("== String Manipulation ==");
const manipulate_string = (string_to_manipulate, manipulation) => {
    switch (manipulation) {
        case 0:
            return string_to_manipulate.charAt(2).toUpperCase() +  string_to_manipulate.slice(3,6);
        case 1:
            return string_to_manipulate.charAt(13).toUpperCase().repeat(8);
        case 2:
            return [string_to_manipulate.split(" ")[0]];
        case 3:
            return `${string_to_manipulate.substr(0, 6)} ${string_to_manipulate.substr(11, 6)}`;
        case 4:
            return string_to_manipulate.charAt(0).toLowerCase()
                + string_to_manipulate.substr(1, string_to_manipulate.length-2).toUpperCase()
                + string_to_manipulate.charAt(string_to_manipulate.length-1).toLowerCase();
    }
};
let a = "Elzero Web School";
console.log(manipulate_string(a,0)); // [slice, charAt]                             Zero
console.log(manipulate_string(a,1)); // 8 H                                         HHHHHHHH
console.log(manipulate_string(a,2)); // Return Array                                ["Elzero"]
console.log(manipulate_string(a,3)); // "substr" Method + Template Literals         Elzero School
console.log(manipulate_string(a,4)); // Dynamic                                     eLZERO WEB SCHOOl
console.log("===============================");