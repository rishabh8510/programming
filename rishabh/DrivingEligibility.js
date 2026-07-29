function DrivingEligibility(age){
    if(age >= 18){
        return "eligible"
    }else {
        return "not eligible"
    }
}

let result = DrivingEligibility(17)
console.log(result)