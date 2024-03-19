/* toFixed convert the number into strings and set the precision */
let res=0.04;
let mulRes = 0.2 * 0.2;
console.log(mulRes); //0.04000000000000001
console.log(res===mulRes);//false
/* To fixed convert it to string we need to change it number */
console.log(mulRes.toFixed(2), typeof mulRes.toFixed(2)); //0.04 string
console.log(res,typeof res);
console.log("parseInt(mulRes.toFixed(2)))",parseInt(mulRes.toFixed(2))); //0 Wrong ans I did
console.log((parseFloat(mulRes.toFixed(2)))===res);//true

let x=12.14
console.log(x.toPrecision(2)); //12
console.log(mulRes.toPrecision(2)); //0.040