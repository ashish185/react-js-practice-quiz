/* 
Block: block is section of code where multiple lines of code executed
Block Scope: The scope of variables are limited to the curly braces, these are called block scope.
*/
let a=20;
{
  let a=30;
  console.log(a);
  {
    let a=40
    console.log(a); //40
  }
}
console.log(a);
//30 40 20