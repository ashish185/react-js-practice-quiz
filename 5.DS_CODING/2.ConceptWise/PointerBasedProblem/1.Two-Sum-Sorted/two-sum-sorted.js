/**
 * Problem Solved by two pointers Approach
 * Link:https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#:~:text=Two%20Sum%20II%20%2D%20Input%20Array%20Is%20Sorted%20%2D%20LeetCode&text=Given%20a%201%2Dindexed%20array,length%20.
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let fpIndx=0;
  let lpIndx= numbers.length-1;
  let sum;
  while(fpIndx<lpIndx){
      sum= numbers[fpIndx] + numbers[lpIndx];
      if(sum === target){
          return [fpIndx+1, lpIndx+1];
      }
      else if(sum>target){
          lpIndx--;
      }
      else if((sum)<target){
          fpIndx++;
      }
  }    
};
console.log(twoSum([2,7,11,15],9));