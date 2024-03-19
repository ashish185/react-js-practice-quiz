/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   const arr= [...s];
   let max=0;
   let maxLength=0; 
  let distinctLength = 0;
  for (let i = 0; i < arr.length; i++) {
     let mp = {};
    for (let index = i; index < arr.length; index++) {
      const element = arr[index];
      if (!mp[element]) {
        mp[element] = 1;
        distinctLength++;
      }
      else {
        mp = { [element]: 1 }
        distinctLength = 1;
      }
      maxLength = Math.max(distinctLength, maxLength);
    }
    distinctLength=0;
    max = Math.max(max, maxLength);
  }
  return max;
};

/* console.log(lengthOfLongestSubstring('abcabcbb')); //3
console.log(lengthOfLongestSubstring('bb')); //1
console.log(lengthOfLongestSubstring('pwwkewpwwkew')); //3 */
console.log(lengthOfLongestSubstring("asjrgapa"));