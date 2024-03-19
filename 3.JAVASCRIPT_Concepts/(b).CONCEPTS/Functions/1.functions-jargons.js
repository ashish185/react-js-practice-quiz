/**
 * *1. Function Statements or Declaration
 * *2. Function Expression
 * *3. Named Function Expression
 * *4. Diff between Function Statement/Declaration and Function Expression
 * *5. Anonymous function
 * *6. Diff between Args and Parameters?
 * *7. First class Functions or First class Functions?
 * *8. HIGH ORDER FUNCTION
 */

//? 1. What are Function Statements or Declaration?
/* The function declaration (function statement) defines a function with the specified parameters */
// if you write a function with name like this
function getX() {

}

//? 2. What are Function Expression?
// Function that act's like value
var b= function(){
console.log("functional expression");
}
b();

//? 3. What is Named Function Expression?
//** name bhi de rkha h function ka
var named= function xyz () { 
    console.log("Named Function Expression =" + xyz);
}
//xyz(); //! It gives error xyz is not defined because xyz is not in global scope 

named(){ /* Outputs //Named Function Expression = function xyz () { 
    console.log("Named Function Expression = " + xyz);
} */

//?. What is diff between Function Statement/Declaration and Function Expression?
// Function Declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
// Function Expressions are not hoisted:
//We can call getX() from anywhere. where as we
//can't call before declaration of b.

//?. Anonymous function
/* Anonymous function which does not have an identity.
They are used to assign a function as value to a variable
*/
function () {

}

//?. Diff between Args and Parameters?
function x1( param1,param2) {

}
x1("args1","args2")

const handler = () => console.log ('This is a click handler function'); //return another fn
document.addEventListener ('click', handler);

/**
 * ?. First class Functions or First class Functions?
 ** First-class Functions means when Functions in that language are treated like any other variable. 
 ** like handler. Ex: document.addEventListener ('click', handler);
 */

/* HIGH ORDER FUNCTION:
Higher-order function is a function that accepts another function 
as an argument or returns a function as a return value.
*/
const firstOrderFunc = () => console.log ('Hello I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
