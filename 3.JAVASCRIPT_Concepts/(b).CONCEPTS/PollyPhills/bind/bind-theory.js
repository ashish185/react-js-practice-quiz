/* 

In JavaScript, apply, call, and bind are methods used to change the context (this) of a function. 
1. call()
Syntax: function.call(thisArg, arg1, arg2, ...)
2. apply()
Syntax: function.apply(thisArg, [argsArray])
3. bind()
Syntax: function.bind(thisArg, arg1, arg2, ...)

*/
const studentObj= {
  name:'Ashish',
  getFullName: function (middleName, lastName){
    console.log(`${this.name} ${middleName} ${lastName}`);
  }
};

studentObj.getFullName('Kumar', 'Singhal');

const studentObj2= {
  name:'Bhavya',
 }

console.log('//Case1');
studentObj.getFullName.bind(studentObj2, 'Kumar' , 'Goyal')();

console.log('//Case2');
studentObj.getFullName.bind(studentObj2)('Kumar', 'Goyal');

console.log('//Case3: When we send the arg during bind as well as calling, Which one takes priority');
studentObj.getFullName.bind(studentObj2, 'Kumar', 'Goyal')('Kumar1', 'Goyal1'); //The args which sent during calling takes priority.

function multiply(a, b) {
  return a * b;
}

// Create a new function where `a` is always 2
const double = multiply.bind(null, 2);

console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20
