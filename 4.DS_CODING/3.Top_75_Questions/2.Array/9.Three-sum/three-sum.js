/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: [-2,0,0,2,2] This input gives the incorrect result

*/

//[-1,0,1,2,-1] -> [-1,-1,0,1,2]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const twoSum= function(numbers, target) {
  let fpIndx=0;
  let lpIndx= numbers.length-1;
  let sum;
  let ans=[];
  let fpPrevIdx=-1;
  let lpPrevIndx=-1;
     while (fpIndx < lpIndx) {
         sum = numbers[fpIndx] + numbers[lpIndx];
         if (numbers[fpPrevIdx] === numbers[fpIndx] && numbers[lpPrevIndx] === numbers[lpIndx]) {
             fpIndx++;
             lpIndx--;
             continue;
         }
         fpPrevIdx = fpIndx;
         lpPrevIndx = lpIndx;
         if (sum === target) {
          ans.push([numbers[fpIndx], numbers[lpIndx]])
          fpIndx++;
          lpIndx--;
      }
      else if(sum>target){
          lpIndx--;
      }
      else if((sum)<target){
          fpIndx++;
      }
  }
    return ans;
};

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let target=0;
    let req;
    let finalAns=[];
    let prev;
    nums.forEach((el,idx) => {
        if(prev!==el){
        req= target-el;
        const ans= twoSum(nums.slice(idx+1),req);
        if(ans.length){
            const res = ans.map(a => [el, ...a]);
            finalAns = [...finalAns, ...res];
        }
        prev=el;
        }
    })
    return finalAns;
    
};

// console.log(threeSum([1,-1,-1,0]));
// console.log(threeSum([-2,0,0,2,2]));
// console.log(threeSum([3,0,-2,-1,1,2]));
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));