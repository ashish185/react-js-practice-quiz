let a='18';
let b='19';
console.log(a>b); //false

// Why is it true?
a='9';
b='18'

/* Because String character by character Ascii Value check krta h comparison k liye 
first comparison:
9 vs 1, & 9 ascii value is 57 & 1 ascii value is 49
*/
console.log(a>b); //true