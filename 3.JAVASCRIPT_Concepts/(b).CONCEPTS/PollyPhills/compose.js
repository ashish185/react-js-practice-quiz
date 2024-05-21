/* 
Create a function compose, which can take callback as function arguments
and execute from right to left, with their result passing to args of second calling function.
ForEx: compose(addFive, subtractTwo, multiplyFour)(5);

=> 5+5=10 -> 10-2=8 -> 8 * 4 => 32; Wrong: It execute right to left

=> 5*4=20 -> 20-2=18 -> 18+5=23

*/

const addFive = (a) => a + 5;

const subtractTwo = (a) => a - 2;

const multiplyFour = (a) => a * 4;

const compose = (...callbacks) => {
  const otherFunc = function (args) {
    return callbacks.reduceRight((result, cb) => cb(result), args);
  }
  return otherFunc
}

console.log('compose1', compose(addFive, subtractTwo, multiplyFour)(5)); //23

/* Similarly there is pipe function: who execute the callback from left to right.
*/