function CheckSpecialSymbol(ch) {
    if (
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= 'a' && ch <= 'z') ||
        (ch >= '0' && ch <= '9')
    ) {
        return "Not a Special Symbol";
    } else {
        return "Special Symbol";
    }
}

let result = CheckSpecialSymbol("@");
console.log(result);