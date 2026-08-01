function DiscountCalculation(originalPrice, discountPercentage) {
    let discount = (originalPrice * discountPercentage) / 100;
    let finalPrice = originalPrice - discount;

    return finalPrice;
}

let result = DiscountCalculation(1000, 20);
console.log(result);