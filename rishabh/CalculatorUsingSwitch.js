function Calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;

        case "%":
            if (b === 0) {
                return "Cannot find remainder with zero";
            }
            return a % b;

        default:
            return "Invalid Operator";
    }
}

console.log(Calculator(20, 10, "+")); 
console.log(Calculator(20, 10, "-"));
console.log(Calculator(20, 10, "*"));
console.log(Calculator(20, 10, "/"));
console.log(Calculator(20, 10, "%"));