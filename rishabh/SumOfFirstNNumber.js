function SumOfFirstNNumber(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }

    return sum;
}

let result = SumOfFirstNNumber(10);
console.log(result);