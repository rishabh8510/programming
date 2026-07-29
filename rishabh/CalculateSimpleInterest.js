function CalculateSimpleInterest(p, r, t){
    return (p * r * t) / 100;
}

let result = CalculateSimpleInterest(1000, 3, 2)
console.log(result)