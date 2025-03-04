const longestCommonSubstring=(str1, str2)=> {
  const arr1= [...str1];
  const arr2 = [...str2];
  const n1= str1.length;
  const n2= str2.length;
  const dp = Array(n1 + 1).fill(0).map(() => Array(n2 + 1).fill(0))
  //const arr = [new Array(arr1.length - 1).fill(0), new Array(arr2.length - 1).fill(0)];
  let maxLength=0;
  for (let p = 1; p <=arr1.length; p++) {
    const ch1 = arr1[p-1]; /* Agar hum p and q ko 0 se start krte to hume index bound handle krna pdata */
    for (let q = 1; q <=arr2.length; q++) {
      const ch2 = arr2[q-1];
      if(ch1===ch2){
        dp[p][q] = dp[p - 1][q - 1] + 1
        maxLength= Math.max(dp[p][q], maxLength);
      }
    }
  }
  
  console.log(dp);
  console.log(maxLength);
  return maxLength;
}

longestCommonSubstring('javascript','java') //The length should be 4