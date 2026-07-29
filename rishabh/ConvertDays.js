function ConvertDays(totalDays) {
    let years = Math.floor(totalDays / 365);
    let remainingDays = totalDays % 365;

    let months = Math.floor(remainingDays / 30);
    let days = remainingDays % 30;

    console.log("Years:", years);
    console.log("Months:", months);
    console.log("Days:", days);
}

ConvertDays(400);