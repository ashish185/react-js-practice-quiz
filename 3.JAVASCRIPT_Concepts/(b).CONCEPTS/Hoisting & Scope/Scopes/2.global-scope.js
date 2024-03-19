/* 
Var key scope is: Outside the function it is global scopes, inside the function it is function scope.
Let and Const scope is: Block Scope
*/

var a = 10; //Global Scope

function checkScope() {
  //In below line why variable 'a' not print value 10 though 'a' in global scope and in it's lexical environment?
  /* Ans: Because this function has different execution context and in this execution context,
  variable hoist and set to undefined.
  */
  
  console.log('function scope', a);
  var a = 20;
  console.log('After initialization', a);
};

checkScope();