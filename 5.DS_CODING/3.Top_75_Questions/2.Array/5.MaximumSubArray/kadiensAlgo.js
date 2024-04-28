/* Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */
const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const maximumSubArr = (nums) => {

  let currBestSum = nums[0];
  let overAllBestSum= nums[0];
  let arr = [];
  let track = {
    startIndx: 0,
    endIndx: 0
  };
  for (let i = 1; i < nums.length; i++) {
    if (currBestSum >= 0) {
      currBestSum = currBestSum + nums[i];
    }
    else {
      currBestSum = nums[i];
    } 
    if (currBestSum > overAllBestSum) {
      overAllBestSum = currBestSum;
    }
  }
  return overAllBestSum;
}
console.log(maximumSubArr(nums1)); // [4,-1,2,1]
// console.log(maximumSubArr([1]));
// console.log(maximumSubArr([5,4,-1,7,8]));
// console.log(maximumSubArr([-1]));