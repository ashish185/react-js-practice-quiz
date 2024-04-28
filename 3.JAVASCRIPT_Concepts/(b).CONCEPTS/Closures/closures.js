/* 
Best Definition:
A closure is the combination of a function bundled together (enclosed) with references
 to its surrounding state 
(the lexical environment).
For ex
inner functions have access to variables and parameters of outer function 
even after the outer function has returned. 
2) It ceases the variable of outer function.
3) Closure don’t remember the value of the variable 
it only points to the variable or stores the reference of the variable

//Uses of Closure 
1)Currying.
2)memoize
3)Data abstraction
*/

//Ex-1: Without parameters(arguments)
function Outer() {
    var a = 10;
    //It does not store value,it just take the reference
    function inner() {
        var b=20;
        console.log("a:"+a+" b:"+b);
        b=30;
        ++a; //if a=30 the log give "a:30 b:20")
    }
    return inner; // Returning reference of the function which is also an object.
}
Outer()();//a:10 b:20
Outer()(); //a:10 b:20
var innerCall = Outer(); //a:10 b:20 
//After calling to Outer, var a ka scope to khtam ho gya still we can access variable a in inner function.
//It gets the reference of Inner function.
//It is because Inner function is closure. It ceases the variable of outer function.
console.dir(innerCall);
innerCall(); // a:10 b:20
innerCall(); // a:11 b:20
/* 
name: "inner"[[Scopes]]: 
>>Scopes[3]
    0: Closure (Outer)
    a: 11 
*/

//Ex-2: With parameters(arguments)
function Outer1( outerArg ){
    let a=10;
    function inner1(innerArg){
        let b=20;
        let c=30;
        ++outerArg;
        ++a;
        b++;
        console.log(`Val of a is ${a}, b is ${b}, but c is ${c} outerArg is ${outerArg}`);
        ++c;
    }
    return inner1;
}

let innerCall1 = Outer1(30);
innerCall1(20); //Val of a is 11, b is 21, but c is 30 outerArg is 31
console.dir(innerCall1);
/* [[Scopes]]: Scopes[3]
0: Closure (Outer1)
a: 11 */

//1)  What will the following code output?
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("SetTimout i value with var", i);
  }, 1000);
}
/*SetTimout i value with var 3
SetTimout i value with var 3
SetTimout i value with var 3 */
//Why we getting 3 in output even the loop is running till 3?
/*Ans: setTimeOutFunction let say f
i=0: f(c:i(3))
i=1: f(c:i(3))
i=2: f(c:i(3))
As the Var has function scope it would not create new variable like Let
Note: It changes the reference (esse ye clear hota h closure m ref store hote h na ki values)
Instead it changes the value at REFERENCE of var and we
know closures do not store values but reference
*/ 

for (let z = 0; z < 3; z++) {
    setTimeout(function() { 
        console.log("SetTimout z value with let",z);
     }, 1000);
}
/*SetTimout z value with let 0
SetTimout z value with let 1
SetTimout z value with let 2 */
for (var p = 0; p< 3; p++) {
    setTimeout(function(local_p) {
      return function(){ console.log("Event with var it is giving result",local_p);}
    }(p) //THis is IIFY
    , 1000);
  }
/* Event with var it is giving result 0
Event with var it is giving result 1
Event with var it is giving result 2
*/  
// 2Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(10);
  addSix(21);
  /* 3How would you use a closure to create a private counter?
  function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way */

// Can't we do the same thing with global object.

//Suppose we have global oject
let y=1;

function inc(){
    y=y+1;
}
inc();
console.log("Val of y:",y); //Val of y:2
console.dir(inc);
// Because there is possibility that someone can change the Global obj
/* for (var i = 0; i < 3; i++) {setTimeout(function() { alert(i); }, 1000 + i);} */
