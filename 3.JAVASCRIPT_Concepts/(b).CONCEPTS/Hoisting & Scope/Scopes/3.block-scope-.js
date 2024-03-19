/* 
Block: block is section of code where multiple lines of code executed
Block Scope: The scope of variables are limited to the curly braces, these are called block scope.
In memory: a new space called Block is form, where it stores the local scope of this variable.
Refer:3.block-scope-debug.png
*/
let x=20;
{
  let x=30;
  console.log(x);
  {
    let x=40
    console.log(x); //40
  }
}
console.log(x);
//30 40 20