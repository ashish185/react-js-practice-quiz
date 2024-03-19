/* 
https://leetcode.com/problems/valid-anagram/submissions/
Anagram: is word which is formed by rearranging the alphabets of other string.
For ex: LISTEN: SILENT, TRIANGLE -> INTEGRAL
INTEGRAL is an anagram: right.
*/

/* 1st solution: Brute force solution, sort both of the strings 
Time: O(nlogn) 
Space: o(1)
*/

/** 2nd solution: COUNT FREQUENCY
 * Time: o(n)
 * space: o(distinct characters)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  //rat car
  if(s.length !== t.length){
      return false;
  }

  const mp={};
  const sarr=[...s];  // [r,a,t,]
  const tarr=[...t]; // [c,a,r]
  sarr.forEach( el=>{
      if(mp[el]){
          mp[el] = mp[el]+1;
      }
      else{
          mp[el]=1;
      }        
  });
  
  for(let i=0; i<tarr.length; i++){
      const el = tarr[i];
      if(mp[el]){
         mp[el] = mp[el] -1; 
          if(mp[el]<0){
              return false;
          }
      }
      else{
          return false;  
      }        
  }
  return true;
};