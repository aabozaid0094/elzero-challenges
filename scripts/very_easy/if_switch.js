// IF to Swich and VicaVerse
console.log("== IF to Swich and VicaVerse ==");
let if_to_be_switch = () => {
    let job = "Manager";
    let salary = 0;

    if (job === "Manager") {
        salary = 8000;
    } else if (job === "IT" || job === "Support") {
        salary = 6000;
    } else if (job === "Developer" || job === "Designer") {
        salary = 7000;
    } else {
        salary = 4000;
    }

    return salary;
};
console.log("if_to_be_switch", if_to_be_switch());

let if_into_switch = () => {
    let job = "Manager";
    let salary = 0;

    switch (job) {
        case "Manager":
            salary = 8000;
            break;
        case "IT":
        case "Support":
            salary = 6000;
            break;
        case "Developer":
        case "Designer":
            salary = 7000;
            break;
        default:
            salary = 4000;
    }
    return salary;
};
console.log("if_into_switch", if_into_switch());

let switch_to_be_if = () => {
    let holidays = 0;
    let money = 0;

    switch (holidays) {
        case 0:
            money = 5000;
            break;
        case 1:
        case 2:
            money = 3000;
            break;
        case 3:
            money = 2000;
            break;
        case 4:
            money = 1000;
            break;
        case 5:
            money = 0;
            break;
        default:
            money = 0;
    }
    return money;
};
console.log("switch_to_be_if", switch_to_be_if());

let switch_into_if = () => {
    let holidays = 0;
    let money = 0;

    if (holidays === 0) {
        money = 5000;
    } else if (holidays === 1 || holidays === 2) {
        money = 3000;
    } else if (holidays === 3) {
        money = 2000;
    } else if (holidays === 4) {
        money = 1000;
    } else if (holidays === 5) {
        money = 0;
    } else {
        money = 0;
    }
    return money;
};
console.log("switch_into_if", switch_into_if());
console.log("===============================");