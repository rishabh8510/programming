function Factorial(n){
    let factorial = 1

    for(let i = 1; i <= n; i++){
        factorial = factorial * i
    }
    return factorial
}

let result = Factorial(5)
console.log(result)