// function SmallestAmongThreeNumber(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     } else if (b <= a && b <= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// let result = SmallestAmongThreeNumber(10, 20, 30);
// console.log(result);



function SmallestAmongThreeNumber(a, b, c) {
    if (a < b && a < c) {
        return "a is smallest";
    } else if (b < a && b < c) {
        return "b is smallest";
    } else if (c < a && c < b) {
        return "c is smallest";
    } else if (a === b && b === c) {
        return "All three are equal";
    } else {
        return "Two numbers are equal and smallest";
    }
}

let result = SmallestAmongThreeNumber(10, 20, 30);
console.log(result);