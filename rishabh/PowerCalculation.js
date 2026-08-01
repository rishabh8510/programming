// function PowerCalculation(base, exponent){
//     return result = base ** exponent
// }

// let power = PowerCalculation(2,3)
// console.log(power)


function PowerCalculation(base, exponent){
    let result = 1

    for(let i = 1; i <= exponent; i++){
        result = result * base
    }
    return result
}

console.log(PowerCalculation(2, 3));
