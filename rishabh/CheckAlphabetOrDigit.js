function CheckAlphabetOrDigit(ch) {
    if (ch >= '0' && ch <= '9') {
        return "Digit";
    } else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
        return "Alphabet";
    } else {
        return "Special Character";
    }
}

let result = CheckAlphabetOrDigit("A");
console.log(result);