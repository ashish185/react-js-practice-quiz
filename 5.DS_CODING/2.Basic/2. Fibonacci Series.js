/* 
if n=5;
0 1 1 2 3 5
*/
const getFibonacciSeries = (n) =>{
    let first=0;
    let second =1;
    console.log(first,second);
    for(let i=2 ; i<n;i++){
        let sum= first + second;
        console.log(sum);
        first = second;
        second = sum;
    }
}
getFibonacciSeries(7);