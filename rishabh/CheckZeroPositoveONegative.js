function CheckZeroPositiveOrNegative(num) {
    if (num == 0) {
        return "Zero";
    } else if (num > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(CheckZeroPositiveOrNegative(10));   
console.log(CheckZeroPositiveOrNegative(-5)); 
console.log(CheckZeroPositiveOrNegative(0));