/* number is said to be perfect sqaure if it exactly divides by (number* number)
Observation 9 is perfect square, if any perfect exists then it must before the sqrt of that number
9: perfect sq of 3
let x =root 9
x*x =9
so num should be less than 
 */
const getPerfectSquare=(givenNum)=>{
    for(let num=1;num*num<=givenNum;num++){
        if(givenNum === num *num){
            return true;
        }
    }
    return false;
}
console.log(getPerfectSquare(3));
