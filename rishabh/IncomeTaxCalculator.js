function IncomeTaxCalculator(income) {
    if (income <= 250000) {
        return 0;
    } else if (income <= 500000) {
        return (income * 5) / 100;
    } else if (income <= 1000000) {
        return (income * 20) / 100;
    } else {
        return (income * 30) / 100;
    }
}

let result = IncomeTaxCalculator(600000);
console.log(result);