function CurrencyConverter(amount, choice) {
    switch (choice) {
        case 1:
            return amount * 86; // USD to INR

        case 2:
            return amount / 86; // INR to USD

        case 3:
            return amount * 100; // EUR to INR

        case 4:
            return amount / 100; // INR to EUR

        default:
            return "Invalid Choice";
    }
}

console.log(CurrencyConverter(10, 1));