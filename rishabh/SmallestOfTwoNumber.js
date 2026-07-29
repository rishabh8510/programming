// function SmallestOfTwoNumber(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b;
//     } else {
//         return "Both numbers are equal";
//     }
// }

// let result = SmallestOfTwoNumber(2, 3);
// console.log(result);


function SmallestOfTwoNumber(a, b) {
    if (a < b) {
        return "a is smaller";
    } else if (b < a) {
        return "b is smaller";
    } else {
        return "Both numbers are equal";
    }
}

console.log(SmallestOfTwoNumber(2, 3));