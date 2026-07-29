function FindAbsoluteValue(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}

let result = FindAbsoluteValue(-10);
console.log(result);