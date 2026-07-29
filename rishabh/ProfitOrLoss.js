// function ProfitOrLoss(costPrice, sellingPrice) {
//     if (sellingPrice > costPrice) {
//         return "Profit";
//     } else if (costPrice > sellingPrice) {
//         return "Loss";
//     } else {
//         return "No Profit No Loss";
//     }
// }

// let result = ProfitOrLoss(1000, 1200);
// console.log(result);



function ProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) {
        return "Profit = " + (sellingPrice - costPrice);
    } else if (costPrice > sellingPrice) {
        return "Loss = " + (costPrice - sellingPrice);
    } else {
        return "No Profit No Loss";
    }
}

console.log(ProfitOrLoss(1000, 1200));
console.log(ProfitOrLoss(1000, 800));