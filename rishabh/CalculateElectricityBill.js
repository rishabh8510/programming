function CalculateElectricityBill(units) {
    if (units <= 100) {
        return units * 5;
    } else if (units <= 200) {
        return units * 7;
    } else if (units <= 300) {
        return units * 10;
    } else {
        return units * 12;
    }
}

let result = CalculateElectricityBill(250);
console.log(result);