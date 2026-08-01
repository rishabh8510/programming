function ATMWithdrawal(balance, amount) {
    if (amount <= 0) {
        return "Invalid Amount";
    } else if (amount % 100 !== 0) {
        return "Amount should be multiple of 100";
    } else if (amount > balance) {
        return "Insufficient Balance";
    } else {
        return "Withdrawal Successful";
    }
}

let result = ATMWithdrawal(10000, 2500);
console.log(result);