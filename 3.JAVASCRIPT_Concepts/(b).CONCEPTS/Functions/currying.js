/* Currying is a technique of evaluating function with multiple arguments,
into sequence of functions with single argument.
Currying in javascript can be done in 2 ways:
1) By using closures
2) By using bind method.
 */

// 1)By using closures

function add(x){
    return function(y){
        return x+y;
    }
}
let addWith = add(2); /*  addWithContains reference of inner function,
Even after function in retured, 2 is close with that function
*/
let ans = addWith(5);
console.log("addWith(5)=", ans ) ; //addWith(5)= 7

console.log("can also be wriiten", add(6)(10)); //Cool


//2)By using bind
//By creating normal function
 function multiply(x,y){
     console.log("Multiply reults=",x*y);
 }
 let multiplyByTwoWith = multiply.bind(this,2); //As binds gives a copy of function
 multiplyByTwoWith(3); //Multiply reults= 6
/* Internally above function like                                                                
function multiply(y){
    let x = 2; //fixing the x
     console.log("Multiply reults=",x*y);
 }
 let multiplyByTwoWith = multiply.bind(this,2);
*/

//What is the output if?
//only this in bind args
let argWtihThisOnly = multiply.bind(this,);
argWtihThisOnly(4,5); //Multiply reults= 20

//if both the aruguments provide ini bind
let bothArgsInBind = multiply.bind(this,11,2); 
bothArgsInBind(11,3) //IT wiil ignore these arguments
//Multiply reults= 22
let withoutThis = multiply.bind(11); 
withoutThis(3) //IT wiil ignore this arguments
//Multiply reults= NaN
let withoutThisButTwoArgsInBind = multiply.bind(11,4); 
withoutThisButTwoArgsInBind(3) //IT wiil ignore this arguments
//Multiply reults= 12, I dont know how

//WHAT IS THE OUTPUT?
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
function sum(a, b) {
    return a + b;
}
  
  let curriedSum = curry(sum);
let ans2 = curriedSum(1)(2);
console.log(ans2); //3

 