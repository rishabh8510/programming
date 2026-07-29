// function GreatestAmongThreeNumber(a, b, c) {
//     if (a > b && a > c) {
//         return "a is greatest";
//     } else if (b > a && b > c) {
//         return "b is greatest";
//     } else if (c > a && c > b) {
//         return "c is greatest";
//     } else {
//         return "Two or more numbers are equal";
//     }
// }


function GreatestAmongThreeNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let result = GreatestAmongThreeNumber(1, 2, 3);
console.log(result);