function CheckUppercaseOrLowercase(ch) {
    if (ch >= 'A' && ch <= 'Z') {
        return "Uppercase";
    } else if (ch >= 'a' && ch <= 'z') {
        return "Lowercase";
    } else {
        return "Not an Alphabet";
    }
}

let result = CheckUppercaseOrLowercase("R");
console.log(result);