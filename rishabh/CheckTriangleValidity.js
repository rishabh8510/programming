function CheckTriangleValidity(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return "Valid Triangle";
    } else {
        return "Invalid Triangle";
    }
}

let result = CheckTriangleValidity(3, 4, 5);
console.log(result);