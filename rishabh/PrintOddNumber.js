function PrintOddNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

PrintOddNumber(30);