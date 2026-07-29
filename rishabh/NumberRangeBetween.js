function NumberRangeBetween(num){
    if(num > 1 && num < 100){
        return "number between 1 to 100"
    }else {
        return "not between 1 to 100"
    }
}

let result = NumberRangeBetween(515)
console.log(result)