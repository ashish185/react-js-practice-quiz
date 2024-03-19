const array1 = [1, 2, 3, 4, 5];

const val = array1.reduce((acc, currVal) => {
  if (currVal > acc) {
    return currVal;
  }
  return acc;
})

console.log("val is", val); //5

const arr= [[1], [2], [3]];
const b = [...arr];
arr.pop().pop();
console.log(b);

var obj = {
  m: 99,
  getValue: function () {
    return this.m
  }
}

var { getValue } = obj

var o2 = { m: 88, getValue }
var m = 999
console.log(o2.getValue());
console.log(getValue());