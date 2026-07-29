function CheckVotingEligibility(age){
    if(age >= 18){
        return "eligible"
    }else {
        return "not eligible"
    }
}

let result = CheckVotingEligibility(17)
console.log(result)