function GradeCalculator(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else if (marks >= 0) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

let result = GradeCalculator(85);
console.log(result);