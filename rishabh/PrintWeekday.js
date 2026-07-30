// function PrintWeekday(day) {
//     switch (day) {
//         case 1:
//             return "Monday";

//         case 2:
//             return "Tuesday";

//         case 3:
//             return "Wednesday";

//         case 4:
//             return "Thursday";

//         case 5:
//             return "Friday";

//         case 6:
//             return "Saturday";

//         case 7:
//             return "Sunday";

//         default:
//             return "Invalid Day";
//     }
// }

// let result = PrintWeekday(3);
// console.log(result);



function PrintWeekday(day) {
    switch (day.toLowerCase()) {
        case "mon":
            return "Monday";

        case "tue":
            return "Tuesday";

        case "wed":
            return "Wednesday";

        case "thu":
            return "Thursday";

        case "fri":
            return "Friday";

        case "sat":
            return "Saturday";

        case "sun":
            return "Sunday";

        default:
            return "Invalid Day";
    }
}

console.log(PrintWeekday("mon"));