console.log("************TEMPORAL DEAD ZONE***************************");
/* Temporal zone= The variable is said to be in a "temporal dead zone" (TDZ) 
from the start of the block until the initialization has completed.
In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) 
causes a ReferenceError. The time span when that happens, 
between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
 */

/* console.log(d); //ReferenceError: d is not defined
let d=100; */
//It gets d as Reference error because 'd' is present in TEMPORAL DEAD ZONE


//What is the output
var a = 10;
var a = 20;
console.log(a); //20 it;s redeclare but not giving error

//let a=30; //SyntaxError: Identifier 'a' has already been declared no output other than Syntax error


/* 
let x=20;
let x=40; */ // SyntaxError:Identifier 'x' has already been declared

/* let c=50;
var c=60; //SyntaxError:Identifier 'c' has already been declared */

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
//let and const does not associate with global object


function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
/* Types of Error (SRT)
1)Syntax Error
2)Reference Error
3)Type Error

*/
//const a; //SyntaxError: Missing initializer in const declaration

const b = 10;
//b=30; //TypeError: Assignment to constant variable


/* console.log(d); //ReferenceError: d is not defined
let d=100; */
console.log("************LET VS CONST vs VAR************");

/*
1) let and const Both have local scope, but var has global scope
2) const needs to be intialise wheras let and var does need to be intialse.
3) we can;t reintailze value of const wheras  var and let can reassign value
4) let and const are more strict than var.
*/
//Agar debug krke var ka scope dekho to Global m milega but let and const ka dekho to Script k andar milega