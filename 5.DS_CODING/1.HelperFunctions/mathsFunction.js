const x=01;
console.log(x); //1

//How to a number is negative?
let isNegative = x<0;

//In Java 24/10 is 2;
//but in JS it;s 2.4 will create issue in while(num>0) 
//use floor
let y=13/9;
console.log(y);

//Precision issue

let res=0.04;
let mulRes = 0.2 * 0.2;
console.log(mulRes); //0.04000000000000001
console.log(res===mulRes);//false

mulRes= Math.round((0.2* 0.2) * 100)/100
console.log(res===mulRes); //true
//Solution
 
//Regex
//I want a string that contains only alpha numeric
let s = "A man, a plan, a canal: Panama";
/* /^[a-z0-9]+$/i

^         Start of string
[a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
+         one or more times (change to * to allow empty string)
$         end of string    
/i        case-insensitive */
var b = s.replace(/[^a-z0-9]/gi,'');
console.log(b);