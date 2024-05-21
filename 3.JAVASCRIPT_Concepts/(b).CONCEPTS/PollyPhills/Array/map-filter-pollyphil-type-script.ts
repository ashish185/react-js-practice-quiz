interface Array<T> {
  myFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
}

Array.prototype.myFilter = function <T>(callback: (value: T, index: number, array: T[]) => boolean): T[] {
  console.log('this Inner', this === window);
  const inputArray = this as T[];
  const newArr: T[] = [];
  for (let i = 0; i < inputArray.length; i++) {
      const callBackRes = callback(inputArray[i], i, inputArray);
      if (callBackRes) {
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

const newMyFilterArray = kvArray3.myFilter((el) => {
  return el.value > 20;
});

console.log(newMyFilterArray); // [{ key: 3, value: 30 }]
