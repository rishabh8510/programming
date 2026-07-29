function DivisibleBySeven(num){
    if(num % 7 == 0){
        return "divisible by 5"
    }else{
        return "not divisible by 5"
    }
}

let result = DivisibleBySeven(4)
console.log(result)