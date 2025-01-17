/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftIndex=0;
  let rightIndex=height.length-1;
  let mx=0;
  let item1= height[leftIndex];
  let item2= height[rightIndex];
  let min=item1;
  while(leftIndex<rightIndex){
      item1= height[leftIndex];
      item2= height[rightIndex];
      min=Math.min(item1, item2);
      let area= min * (rightIndex-leftIndex);
      if(area>mx){
          mx=area;
      }
      if(item1>item2){
          rightIndex--;
      }else if(item2>item1){
          leftIndex++;
      }else{
          leftIndex++;
          rightIndex--;
      }
  }
  return mx;

};