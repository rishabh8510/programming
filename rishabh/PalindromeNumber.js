function PalindromeNumber(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original === reverse) {
        return "Palindrome Number";
    } else {
        return "Not Palindrome Number";
    }
}

console.log(PalindromeNumber(121));
console.log(PalindromeNumber(123));