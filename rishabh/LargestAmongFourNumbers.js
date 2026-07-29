function LargestAmongFourNumbers(a, b, c, d) {
    if (a >= b && a >= c && a >= d) {
        return a;
    } else if (b >= a && b >= c && b >= d) {
        return b;
    } else if (c >= a && c >= b && c >= d) {
        return c;
    } else {
        return d;
    }
}

let result = LargestAmongFourNumbers(10, 25, 15, 20);
console.log(result);