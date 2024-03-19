//Q1: What if outer(let) or inner(var) has variable has same name?
let xy = 20;
if (true) {
    /* var xy=10; //give error because Var hoist here */
    let xy = 40; 
    console.log(xy);//40
}
function xyz() {
    var xy = 30; //As var is function scoped do not give error here
    console.log("xy", xy); //xy 30
}
xyz();
//Q2: What if outer(var) or inner(let) has variable has same name?
var xy1 = 20;
if (true) {
    /* var xy1=10; //Run correctly*/ 
    let xy1 = 400; ///As xy1 has local scope
    console.log(xy1); //400
}
function xyz2() {
    var xy1 = 50; //As var is function scoped do not give error here
    console.log("xy1", xy1); //30
}
xyz2();
/* in case of if block
    Summary
    var - var allowed h
    let - var allowed nhi h //as it is hoist
    var - let allowed h
*/

//Q3 variable and function name is same
//Case1: 
let foo;

//SyntaxError: Identifier 'foo' has already been declared
/* function foo(){
    console.log("foo called");
} */

//Case2:
var foo1;
//does not give syntax error
function foo1(){
    console.log("foo called");
}
foo1(); //foo called

//Q4: Declare variable again
//case 1 both var has globe scope
var x1=2;
var x1=3;
// let x1=5;
console.log(x1);//3

//case2 let declare then var declared
let x2=2;
//let x2=3;//SyntaxError: Identifier 'x2' has already been declared
//var x2=3;
console.log(x2);

//case3 if block scope is added
var x3=2;
if(true){
    var x3=6;
}
console.log(x3); //6

/* Try catch */
console.log(yxx);//undefined
try{
   throw new Error("I am error"); 
}
catch(x){
    var x=5;
    var yxx=6;
    console.log(x); //5
}
console.log(yxx); //6



//
var x1y1="5";
if(true){
    var x1y1;
}
console.log("x1y1",x1y1); //5


var x1y2="5";
if(true){
    var x1y2="10";
}
console.log("x1y2",x1y2); //10