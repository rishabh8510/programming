// function BMICalculator(weight, height) {
//     let bmi = weight / (height * height);
//     return bmi.toFixed(2);
// }

// let result = BMICalculator(70, 1.75);
// console.log(result);




function BMICalculator(weight, height) {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal Weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(BMICalculator(70, 1.75));