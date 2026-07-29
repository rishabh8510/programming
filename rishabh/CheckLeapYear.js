function CheckLeapYear(year) {
    if (year % 400 === 0) {
        return "Leap Year";
    } else if (year % 100 === 0) {
        return "Not Leap Year";
    } else if (year % 4 === 0) {
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

console.log(CheckLeapYear(2024));