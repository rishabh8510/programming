function CheckMultipleOfTen(num){
    if(num % 10 === 0){
        return "multiple of 10"
    }else{
        return "not multiple of 10"
    }
}

let result = CheckMultipleOfTen(50)
console.log(result)