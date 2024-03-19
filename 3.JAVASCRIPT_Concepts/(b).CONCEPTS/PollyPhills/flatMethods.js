const arr = [
  [1, 2],
  [[3, 4], [5]],
  [6]
];
console.log(arr.flat()); // 1, 2, [ 3, 4 ], [ 5 ], 6 ] 
// by default it is one level deep

console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ]

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach(ar => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    }
    else {
      result.push(ar);
    }
  })
  return result;
};

console.log('Custom flat', customFlat(arr, 2));