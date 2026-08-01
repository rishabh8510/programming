// function NumberOfDaysInMonth(month) {
//     if (
//         month === "January" ||
//         month === "March" ||
//         month === "May" ||
//         month === "July" ||
//         month === "August" ||
//         month === "October" ||
//         month === "December"
//     ) {
//         return "31 Days";
//     } else if (
//         month === "April" ||
//         month === "June" ||
//         month === "September" ||
//         month === "November"
//     ) {
//         return "30 Days";
//     } else if (month === "February") {
//         return "28 or 29 Days";
//     } else {
//         return "Invalid Month";
//     }
// }

// console.log(NumberOfDaysInMonth("January"));




function NumberOfDaysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "31 Days";

        case 4:
        case 6:
        case 9:
        case 11:
            return "30 Days";

        case 2:
            return "28 or 29 Days";

        default:
            return "Invalid Month";
    }
}

let result = NumberOfDaysInMonth(2);
console.log(result);