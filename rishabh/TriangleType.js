function TriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral Triangle";
    } else if (a === b || b === c || a === c) {
        return "Isosceles Triangle";
    } else {
        return "Scalene Triangle";
    }
}

let result = TriangleType(5, 5, 5);
console.log(result);