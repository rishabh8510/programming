function ReverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;                
        reverse = reverse * 10 + digit;        
        num = Math.floor(num / 10);           
    }

    return reverse;
}

let result = ReverseNumber(12345);
console.log(result);