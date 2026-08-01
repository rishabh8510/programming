function MenuDrivenCalculator(a, b, choice) {
    switch (choice) {
        case 1:
            return a + b;

        case 2:
            return a - b;

        case 3:
            return a * b;

        case 4:
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;

        case 5:
            if (b === 0) {
                return "Cannot find remainder with zero";
            }
            return a % b;

        default:
            return "Invalid Choice";
    }
}

let result = MenuDrivenCalculator(20, 10, 3);
console.log(result);