let letKeyWord;
const consKeyWord = 1;
var varKeyWord = 2; // Kmal ye h ki val 2 given h but Undefined print hota h because initialization host nhi hoti, Decl host hoti h

var x;
console.log("x before initializing", x); // ****Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
console.log("x after initializing", x); // 23

