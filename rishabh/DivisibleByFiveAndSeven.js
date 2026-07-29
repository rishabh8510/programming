function DivisibleByFiveAndSeven(num) {
    if (num % 5 === 0 && num % 7 === 0) {
        return "Divisible by both 5 and 7";
    } else {
        return "Not divisible by both 5 and 7";
    }
}

let result = DivisibleByFiveAndSeven(35);
console.log(result);