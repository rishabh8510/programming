function CheckPassOrFail(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
    } else if (marks >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(CheckPassOrFail(45)); 
console.log(CheckPassOrFail(25)); 
console.log(CheckPassOrFail(120));