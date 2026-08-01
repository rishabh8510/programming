function SumOfEvenNumber(n){
    let even = 0;

    for(let i = 0; i <= n; i++){
        if(i % 2 === 0){
            even = even + i
        }
    }
    return even
}

let result = SumOfEvenNumber(10)
console.log(result)