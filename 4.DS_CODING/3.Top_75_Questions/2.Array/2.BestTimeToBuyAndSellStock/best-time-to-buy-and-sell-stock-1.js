/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  https://docs.google.com/spreadsheets/d/17Hm6kN2ZoMPvpEpbTFwh_x_baH6HvLp-kFD1KkcDWJM/edit#gid=0
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//   let arrLen= prices.length;
//   let max=0;
//   prices.forEach((el,i) =>{
//       let buy=prices[i];
//       for(let j=arrLen-1; j>i;j--){
//           let profit= prices[j] - buy;
//           if(profit>max){
//               max=profit;
//           }
//       }      
//   })
//   return max;
// };
/* 
Space: O(1)
Time: O(N^2) 
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let arrLen= prices.length;
    let minSoFar=prices[0];
    let max=0;
    prices.forEach((el,i) =>{
         minSoFar= Math.min(minSoFar, el);
         let diff= el- minSoFar;
         if(diff>max){
            max=diff;
         }
    })
    return max;
    
};

console.log(maxProfit([0, 6, -3, 7])); //10

/* 
Space: O(1)
Time: O(N) 
*/