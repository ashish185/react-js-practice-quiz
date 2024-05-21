/* 
Like below example
obj.sumFn also a function, how can we memoize it.
Solution: In that case, we need to pass context in the args.

*/

const obj = {
  offset: 100,
  sumFn: function (num1, num2) {
    console.log('In sum', num1, num2,this.offset, this===window);
    for (let index = 0; index < 100; index++) {
      //anyStatement
    }
    return num1 + num2+ this.offset;
  }
};


const obj2 = {
  offset: 200,
};

console.log(obj.sumFn(50, 100));
console.log(obj.sumFn.call(obj2, 50, 100));


const memoizeFn = function (callbackFn, context) {
  const cache = {};
  function memo(...args) {
    console.log('args', args); // it means array, ...args means value
    const argsKey = JSON.stringify(args);
    console.log('argsKey', argsKey, typeof argsKey);
    if (!cache[argsKey]) {
      const res = callbackFn.call(context || this, ...args);
      cache[argsKey] = res;
    }
    console.log('cache', cache);
    return cache[argsKey];
  }
  return memo;
};
const memoize = memoizeFn(obj.sumFn, obj);
const memoize2 = memoizeFn(obj.sumFn, obj2);
console.log(memoize(50, 100)); //250
console.log(memoize2(50, 100)); //350

