function CheckVowelOrConsonant(ch) {
    if (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    ) {
        return "Vowel";
    } else if (
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= 'a' && ch <= 'z')
    ) {
        return "Consonant";
    } else {
        return "Not an Alphabet";
    }
}

let result = CheckVowelOrConsonant("e");
console.log(result);