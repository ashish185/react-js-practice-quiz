//https://leetcode.com/problems/maximum-subarray/
/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which
has the largest sum and return its sum.
 */
/* Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6. */

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maximumSum = 6;

const maximumSubArr = (nums) => {

  let sum = 0;
  let arr = [];
  let max = nums[0];
  let ans =nums[0];
  let track = {
    startIndx: 0,
    endIndx: 0
  };
  for(let i =0 ; i<nums.length; i++){
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum > max) {
        max = sum;
        track.startIndx = i;
        track.endIndx = j;
      }
    }
    sum=0;
    if (max > ans) {
      ans = max;
    }
  }
  console.log(track);
  return ans;
}
console.log(maximumSubArr(nums1)); // [4,-1,2,1]
// console.log(maximumSubArr([1]));
// console.log(maximumSubArr([5,4,-1,7,8]));
// console.log(maximumSubArr([-1]));