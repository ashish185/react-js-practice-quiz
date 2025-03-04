/**
 * @param {number[]} nums
 * @return {number}
 */
const x=[1,2,3,3];
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
     
        while(i+1<nums.length &&nums[i+1]=== nums[i]){
            nums.splice(i+1,1);
        }
    }
    return nums.length;
};
console.log(removeDuplicates(x));
/**
 * @param {number[]} nums
 * @return {number}
 */
//const x=[1,2,3,3]
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        let count=0;
        let j=i+1;
        while(j<nums.length &&nums[j]=== nums[i]){
            count++;
            j++;
        }
        if(count){
            nums.splice(i+1, count)
        }
        count=0;
    }
    return nums.length;
};