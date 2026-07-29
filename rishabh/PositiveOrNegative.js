function PositiveOrNegative(num){
    if(num >= 0){
        return "positive"
    } else{
        return "negative"
    }
}

let result = PositiveOrNegative(-3)
console.log(result)