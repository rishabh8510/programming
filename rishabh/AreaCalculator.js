function AreaCalculator(choice, a, b = 0) {
    switch (choice) {
        case 1:
            return "Area of Square = " + (a * a);

        case 2:
            return "Area of Rectangle = " + (a * b);

        case 3:
            return "Area of Circle = " + (3.14 * a * a);

        case 4:
            return "Area of Triangle = " + (0.5 * a * b);

        default:
            return "Invalid Choice";
    }
}

console.log(AreaCalculator(1, 5));
console.log(AreaCalculator(2, 10, 20));
console.log(AreaCalculator(3, 7));
console.log(AreaCalculator(4, 10, 5));