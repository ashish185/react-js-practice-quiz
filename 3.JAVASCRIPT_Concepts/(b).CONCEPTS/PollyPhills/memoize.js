/* 
Create memoizeFn which takes callback function and memoize it, so that next time any body execute the fn
does not take that much amount of time.

Requirements:
Input:
FnName: memoizeFn
args: callbackFun
output: you can ask interviewer too, how does it call
memoizeFn(anyFunc)(1,2);

*/

const functionTakesTime = (num1, num2) => {
  for (let index = 0; index < 10000; index++) {
    //anyStatement
  }
  return num1 * num2;
}

//Problem, So the function can take time with each of it's function call
console.time();
console.log(functionTakesTime(20, 40));
console.timeEnd();

//Problem, So the function can take time with each of it's function call
console.time();
console.log(functionTakesTime(20, 40));
console.timeEnd();

//Solution: Create a memoizeFn 
const memoizeFn = (callbackFn, context) => {
  const cache = {};
  function memo(...args) {
    console.log('args',args); // it means array, ...args means value
    const argsKey = JSON.stringify(args);
    console.log('argsKey',argsKey, typeof argsKey);
    if (!cache[argsKey]) {
      // Read in memoize2.js why the below line is blocked.
      // const res = callbackFn(...args);
      const res = callbackFn.call(context || this, ...args);
      cache[argsKey] = res;
    }
    console.log('cache', cache);
    return cache[argsKey];
  }
  return memo;
};

console.log(memoizeFn(functionTakesTime)(20, 30));