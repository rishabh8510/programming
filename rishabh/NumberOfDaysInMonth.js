function NumberOfDaysInMonth(month) {
    if (
        month === "January" ||
        month === "March" ||
        month === "May" ||
        month === "July" ||
        month === "August" ||
        month === "October" ||
        month === "December"
    ) {
        return "31 Days";
    } else if (
        month === "April" ||
        month === "June" ||
        month === "September" ||
        month === "November"
    ) {
        return "30 Days";
    } else if (month === "February") {
        return "28 or 29 Days";
    } else {
        return "Invalid Month";
    }
}

console.log(NumberOfDaysInMonth("January"));