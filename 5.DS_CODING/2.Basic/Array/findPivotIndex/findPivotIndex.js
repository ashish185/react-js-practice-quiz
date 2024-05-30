/* 
const nums = [1,7,3,6,5,6]
*/

const nums = [1, 7, 3, 6, 5, 6]; //Index: 3
const nums2 = [1, 2, 3]; // -1 
const nums3 = [2, -1, 1]; // 0

function calculateSum(arr, start, end) {
  let sum = 0
  while (start < end) {
    sum = sum + arr[start];
    start++;
  }
  return sum;
}

const findPivotIndex = (arr) => {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum = calculateSum(arr, 0, i);
    rightSum = calculateSum(arr, i + 1, arr.length);
    if(leftSum === rightSum){
      return i;
    }
  }
  return -1;
};

console.log(findPivotIndex(nums));
console.log(findPivotIndex(nums2));
console.log(findPivotIndex(nums3));
