// function DivisibleByFive(num){
//     if(num % 5 == 0){
//         return "divisible by 5"
//     }else{
//         return "not divisible by 5"
//     }
// }

// let result = DivisibleByFive(4)
// console.log(result)



function DivisibleByFive(num) {
    return num % 5 === 0;
}

console.log(DivisibleByFive(15));
console.log(DivisibleByFive(14)); 