//1.) What is Hoisting?
/* 
Conceptually, for example, 
The variable and function declarations are put into memory during the compile phase,
but stay exactly where you typed them in your code.

Notes:
1) let,const seems to be not hoist because they are in TEMPORAL DEAD ZONE.
2) Only declaration hoisted

The variable is said to be in a "temporal dead zone" (TDZ) 
from the start of the block until the initialization has completed.
*/

function upar()
{
    console.log('upar');
}
upar();
niche();
function niche()
{
    console.log('niche');
}
/* --------------------------------------Ex:2---------------------------------------------------- */
/* This example shows that only var keyword hoist */
// console.log("Printing letKeyWord",letKeyWord); //app.js:26 Uncaught ReferenceError: Cannot access 'letKeyWord' before initialization
//console.log("Printing constKeyWord",consKeyWord); // ReferenceError: Cannot access 'consKeyWord' before initialization
console.log("This example shows that only var keyword hoist",varKeyWord ); //undefined

let letKeyWord;
const consKeyWord=1;
var varKeyWord=2; // Kmal ye h ki val 2 given h but Undefined print hota h because initialization host nhi hoti, Decl host hoti h

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;


/*JavaScript only hoists declarations, not initializations.
If a variable is declared and initialized after using it, the value will be undefined. For example:  */

// console.log("variables initialize without declare after it gives ref error-",y);
// y=23;

console.log("Var niche, initialize with 23 give undefined-",withVar);
var withVar=23;

console.log("**Hoisting Let cases**");

let x1;
console.log('Upar declare, niche assign-',x1); // Outputs "undefined" since the initialization of "x" is not hoisted
x1 = 23;

// x2=10
// console.log("Upar assign, niche declare-",x2); 
// let x2;

x4="Assign kar rkha h par declare ni"
console.log(x4); // Ex l: It does not give error, as JS engine understand what type of content is present

//With ES6 functions where we assign function to a variable.
const upar1= () =>{
   console.log('upar1');
}

upar1();
// nicheWithVar(); //TypeError: nicheWithVar is not a function
// niche1(); // will get the ref for niche1 because niche 1 is variable that is assigned not declared, hoisting not occur.s
// nicheWithVarWithES6(); //nicheWithVarWithES6 is not a function
var nicheWithVar= function Z()  { 
   console.log('Function assign with var keyWord');
}
const niche2= function x() {
   console.log('niche1');
}

var nicheWithVarWithES6 = () => { 
   console.log('nicheWithVarWithES6');
}