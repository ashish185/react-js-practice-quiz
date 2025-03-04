/* You have to sort array in Linear time complexity */

/* 
  Question: Can't we use quick sort?
  Ans: No, Since quick sort has complexity O(nlogn)
*/
const arr = [3, 2, 3, 4, 1];

const storeFrequency = (arr) => {
  const obj={}
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (obj[element] === undefined) {
      obj[element] = 0;
    } else {
      obj[element] = obj[element] + 1;
    }
  }
  console.log(obj);
  return obj;
};

// TODO: NOT SOLVED YET: Putting this in object may change the type of key
function sortInLinearTimeComplexity() {
  const obj = storeFrequency(arr);
  return Object.keys(obj).reduce((acc, key) => {
    const res = new Array(obj[key]).fill(key)
    return [...acc, ...res];
  },[])
}

console.log(sortInLinearTimeComplexity(arr));
