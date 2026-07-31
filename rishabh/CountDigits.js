function CountDigits(n) {
    if (n === 0) {
        return 1;
    }

    let count = 0;

    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    return count;
}

console.log(CountDigits(0));    
console.log(CountDigits(12345)); 