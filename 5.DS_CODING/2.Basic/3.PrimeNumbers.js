function isPrime(gNum){
    if(gNum ===2 ){
        return true;
    }
    for(let num =2; num<=gNum/2; num++){
        if(gNum % num === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(4));