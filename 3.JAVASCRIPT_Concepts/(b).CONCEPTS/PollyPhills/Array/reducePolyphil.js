/* 
Reduce hover documentation says
reduce will accept a callback function
which have 4 args: 
previousValue: any
currentValue: any
currentIndex: index
array: any[]
it can return

Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, 
  array: number[]) => number): number (+2 overloads)
*/

const arrOfNumb = [2, 6, 4, 3, 4];

const sumCallback = (accumulator, currentElement, index, arr) => {
  return currentElement + accumulator;
};

const originalReduce = arrOfNumb.reduce(sumCallback); 
console.log('OriginalReduce', originalReduce); //19

//or
const originalReduce2 = arrOfNumb.reduce(sumCallback, []);

console.log('Sum of numbers Original reduce', originalReduce); //19



const arrOfNumb2 = [2, 6, 4, 3, 4];
const sumCallback2 = (accumulator, currentElement, index, arr) => {
  return currentElement + accumulator;
};
Array.prototype.myReduce = function (anyCallback, initialValue) {
  const inpArr = this;
  let accumulator;
  /* 
    Case 1: When there is no initial value, then the accumulator value should point to the first element
    and currentObject point to the next second element at First time.
  */
  if (!initialValue) {
    for (let i = 0; i < inpArr.length - 1; i++) {
      if (accumulator === undefined) {
        accumulator = inpArr[0];
      }
      const res = anyCallback(accumulator, inpArr[i + 1], i, inpArr);
      accumulator = res;
    }
    return accumulator;
  }
  /* 
    Case 2: When there is initial value, then the accumulator should have the initial value
    and currentElement point to the first element.
  */
  else {
    accumulator = initialValue;
    for (let i = 0; i < inpArr.length; i++) {
      anyCallback(accumulator, inpArr[i], i, inpArr);
    }
    return accumulator;
  }
}

const myReduceResult = arrOfNumb2.myReduce(sumCallback2);

console.log('myReduceResult', myReduceResult);