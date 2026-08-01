function ArmstrongNumber(num) {
    let original = num;
    let temp = num;
    let count = 0;
    let sum = 0;

    // Count digits
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }

    temp = num;

    // Calculate Armstrong sum
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** count;
        temp = Math.floor(temp / 10);
    }

    if (sum === original) {
        return "Armstrong Number";
    } else {
        return "Not Armstrong Number";
    }
}

console.log(ArmstrongNumber(153));   
console.log(ArmstrongNumber(9474));  
console.log(ArmstrongNumber(123));   