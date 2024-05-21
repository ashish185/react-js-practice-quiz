// Polyfill
//Map
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const valueMap = kvArray.map((el, i, arr) => {
  return el.value;
});
console.log('Value Map Original', valueMap);
// console.log('this Outer', this === window); 


const kvArray2 = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

//*** Note: The function we are assigning to myMap must be regular function.
/* 
  if it is Arrow function then, this will be Window object, but in regular object it refers
  to the calling function
*/
Array.prototype.myMap = function (callback) {
  console.log('this Inner', this === window);
  const inputArray = this;
  const newArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    const callBackRes = callback(inputArray[i], i, inputArray);
    newArr.push(callBackRes);
  }
  return newArr;
};


const filterOriginalArr = kvArray2.filter((el, i, arr) => {
  return el.value > 20;
});
console.log('filterOriginalArr', filterOriginalArr);

/* 
  if it is Arrow function then, this will be Window object, but in regular object it refers
  to the calling function
*/
Array.prototype.myFilter = function (callback) {
  console.log('this Inner', this === window);
  const inputArray = this;
  const newArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    const callBackRes = callback(inputArray[i], i, inputArray);
    if(callBackRes){
      //just above statement added in myFilter
      newArr.push(inputArray[i]);
    }
  }
  return newArr;
};

const kvArray3 = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const newMyFilterArray = kvArray3.myFilter((el,) => {
  return el.value > 20;
});
console.log('newMyFilterArray', newMyFilterArray); //[ { key: 3, value: 30 },]