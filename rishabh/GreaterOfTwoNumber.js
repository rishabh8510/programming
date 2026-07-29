// function GreaterOfTwoNumber(a, b) {
//     if (a > b) {
//         return "a is greater";
//     } else if (b > a) {
//         return "b is greater";
//     } else {
//         return "Both numbers are equal";
//     }
// }

// let result = GreaterOfTwoNumber(2, 3);
// console.log(result);


function GreaterOfTwoNumber(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Both are equal";
    }
}

console.log(GreaterOfTwoNumber(10, 20));