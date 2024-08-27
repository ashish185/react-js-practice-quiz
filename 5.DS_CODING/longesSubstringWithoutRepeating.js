const longestSubstring= (str) => {
  const printStr = [];
  const arr=[...str];
  let maxLength=1;
  for(let i=0; i< arr.length; i++){
    let mp={};
    for (let j = i; j < arr.length; j++) {
      const ch= arr[j];
      if (!mp[ch]) {
        mp[ch] = true;
      }
      else {
        const len = j - i;
        if (len >= maxLength) {
          maxLength= len;
        }
        break;
      }
    }
  }
  console.log(printStr);
  return maxLength;
};


console.log(longestSubstring('abcabcbb')); //3 abc
console.log(longestSubstring('bbbbb')); //1 b
console.log(longestSubstring('pwwkew')); //3 wke
/* 
Complexity
Time:O(n2)
Space: O(256)
*/


/* 
Pseudo code:
1. maxlength store the maximum length.
2. mp should be there which store visited value {a: true}, which tracks the visited characters
should be reset after getting repeated character
3. Two loops
*/