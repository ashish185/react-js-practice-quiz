/* 
Variable shadowing occurs when a variable of an inner scope is defined with the
same name as a variable in the outer scope. In the inner scope, both variables’ scope overlap.
 */
var a=20;
{
    var a=30; //Inner variable has same name as outer variable and they both have scope i.e Global
    console.log(a); //30
}
console.log(a); //30

//Illegal Shadowing: A variable should not cross it,s boundaries

//This will work fine
let z = 10;
{
    let z = 30;
    console.log("z", z); //z 30
}
// // but
// let p=12;
// {
//     var p= 24;
//     console.log("p",p); //Identifier 'p' has already been declared
// }
// /* However if we do vice versa, it will work fine */

var p1 = 12;
{
    let p1 = 24;
    console.log("p1", p1); //p1 24
}

let p3 = 36;
function shadowing() {
    var p3 = 48;
    console.log(p3); // p3 has function scope
}
shadowing();

//Does it print outside?
{
    var value = "yes";
}

console.log(value);
//yes

function xyz() {
    var ash1 = "x"
}
//console.log("//Accessing var outside a block scope -", ash1); //ReferenceError: ash1 is not definedundefined