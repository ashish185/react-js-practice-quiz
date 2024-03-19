console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX Data-Types in js XXXXXXXXXXXXXXXXXXXXXXXX");
/*As per the new Ecmascript 2020/ ES11, JavaScript has 9 Data Structures (not data types).
Data types basically specify what kind of data can be stored and manipulated within a program.
DataTypes is basically 9.

undefined,number, string, boolean, bigint, symbol, null, Object
out of whichObject are non primitives, rest are primitives
// Primitives data types are Immutable, they cannot be changed, For ex: if we manipulate String any how, It gives new String, does not change intial string.
// // bigInt */
console.log('Max range Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log('Max range Number.MAX_VALUE', Number.MAX_VALUE); //1.7976931348623157e+3 

let maxSafeNo = 9007199254740991;

console.log('JS does not support more than this safe integer therefore could give wrong result',++maxSafeNo);
console.log('JS does not support more than this safe integer therefore could give wrong result',++maxSafeNo);

//use Big int, Last m 'n' append krna hota h or hum BigInt() function m bhi pass kar ste h
let maxSafeNBigInt = 9007199254740991n;
console.log('maxSafeNBigInt',++maxSafeNBigInt);
console.log('maxSafeNBigInt',++maxSafeNBigInt);// Output k last m  'n' append milega

//Operations
console.log('Divide', 10n/4n); //Output- 2n as It gives the lowest integer, not gives decimal

//limitation 
console.log('Hum urinary operator lgake string ko number m conver kar skte h', +'10'); //10
console.log('Hum urinary operator lgake string ko number m conver kar skte h', -'10'); //-10
// console.log('Hum urinary operator lgake string ko number m conver kar skte h', /'10'); // error dega

//1) console.log('Hum urinary operator lgake string ko number m conver kar skte h', +10n); //Uncaught TypeError: Cannot convert a BigInt value to a number
//2) Can't use for Math library. Math.max(1n,2n);//Uncaught TypeError: Cannot convert a BigInt value to a number.
//3)console.log('10n +1); //Cannot mix BigInt and other types

function x(){}
// //The typeof operator returns the type of the argument.

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object" 

// typeof null // "object"  

// typeof alert // "function"  

//typeof [] //"object"

//typeof x // "function"  


//Any valid expression is allowed to appear inside ${..} in an interpolated string literal
// console.log(`Type of ${var1WithUndefined} is `,typeof(var1WithUndefined));
// console.log(`Type of ${varWith2AsString} is `,typeof(varWith2AsString));
// console.log(`Type of ${varAsNull} is `,typeof(varAsNull));
// console.log(`Type of ${varWithNumber} is `,typeof(varWithNumber));
// console.log(`Type of ${varWithTrue} is `,typeof(varWithTrue));
// console.log(`Type of class A is `,typeof(A)); //Function ******
/* Type of undefined is  undefined
app.js:106 Type of 2 is  string
app.js:107 Type of null is  object *****
app.js:108 Type of 5 is  number
Type of true is  boolean
 */

 console.log("______________PRIMITIVE AND REFERENCE VALUES__________________");
/* In javascript we can types and values into 2 categories.
1) Primitive values
2) Reference values

1) Primitive values:
(a) Strings, Numbers, Booleans, null,
undefined, Symbol

(c) variable stores value itself
(d) Assign to different
variable) copies the value

2) Reference types: 
(a) All other objects (“more expensive to
create”) because they stored in heap, in heap objects persist whereas Stack is short timespan memory.

(c) varibles stores the pointer
(d) Copying a varible copies the pointer/reference

EX:
var x=2; //it wale store in stack
x=[1,2]; //now x has reference of object address


*/