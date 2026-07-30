function AgeCategory(age) {
    if (age < 0) {
        return "Invalid Age";
    } else if (age <= 12) {
        return "Child";
    } else if (age <= 19) {
        return "Teenager";
    } else if (age <= 59) {
        return "Adult";
    } else {
        return "Senior Citizen";
    }
}

let result = AgeCategory(25);
console.log(result);