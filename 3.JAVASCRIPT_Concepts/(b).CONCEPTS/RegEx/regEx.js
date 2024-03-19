/* Regex must be writter inside Forword slashes */
/* 

[ ]	Character class. Matches any character contained between the square brackets.
[^ ]	Negated character class. Matches any character that is not contained between the square brackets

*/

const regEx= /A-Za-z/;
console.log("regEx.test(A)",regEx.test("A"));
console.log("regEx.test(A)",regEx.test("Ab"));

// [] any of the value between the brackets 
//[^ ] any value not in the brackets
const regEx2= /[A-Za-z]/;
console.log("regEx2.test(A)",regEx2.test("A")); //true
console.log("regEx2.test(Ab)",regEx2.test("Ab")); //true
console.log("regEx2.test(1)",regEx2.test("1")); //false
console.log("regEx2.test(1a)",regEx2.test("1a")); //true

/* Special meaning */
//any digit
console.log(/\d/.test("2")); //true
console.log(/\d/.test("b")); //false

//\s white space char

//n+ at least one n in the string

//{n} at least n length
console.log(/[a-z]{3}/.test("ab"));
console.log(/[a-z]{3}/.test("abc")); //true
console.log(/[a-z]{3}/.test("abcd")); //true

//{n,m} at least n length but not more than m
console.log(/[a-z]{3,4}/.test("abcdef")); //true