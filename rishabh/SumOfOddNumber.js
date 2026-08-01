function SumOfOddNumber(n){
    let odd = 0

    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            odd = odd + i
        }
    }
    return odd
}

let result = SumOfOddNumber(10)
console.log(result)