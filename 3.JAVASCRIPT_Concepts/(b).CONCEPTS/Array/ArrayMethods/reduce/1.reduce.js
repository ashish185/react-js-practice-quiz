"------------------------------REDUCE METHOD-----------------------------"
 /* 
 The reduce() method executes a reducer function (that you provide) on each element of the array, 
 resulting in single output value.
 
 Agr hum array ko Iterate krke koi single value return krna chahte
 
 ho to in that case we can use reduce() method.
 
 The reducer function takes callback function with four arguments:
 (acc, current, index,  sourceArray)
 accumulator (result): By default initialize with first element, if initialize argument not given
 esme returned value store ho jati h har iteration k bad.
 
 current: Current element, it is the element present at first position.
 
 index: index is set to 1 for ist iteration then increment, not Zero (****) (Optional)
 
 sourceArray:The array over which reducer is called upon
 
 */
 let numbers = [1, 2, 3];
 let sum = numbers.reduce(function (accumulator, current,index) {
    console.log(
       `accumulator=${accumulator}|current ${current}|index ${index}`
     );
     return accumulator + current;
 });
 /* 
 accumulator=1|current 2|index 1 --- Observe ynha array m 3 elements h still 2 bar chla 
 accumulator=3|current 3|index 2 --- It is because accumulator we have not intialise therefore set to first element
  */
 
 console.log(sum); // 6
 
 //Intialising acc
 let initAccBy2 = 2;
 let numbers1 = [1, 2, 3];
 let sum2 = numbers1.reduce((result, el, index, sourceArray) => {
   console.log(
     `accumulator=${result}|current ${el}|index ${index}|sourceArray ${sourceArray}`
   );
   return result + el;
 }, initAccBy2);
 console.log("sum2", sum2); //8
 /* accumulator=2|current 1|index 0|sourceArray 1,2,3 -- --- Observe ynha array m 3 elements h & 3 bar chla 
 accumulator=3|current 2|index 1|sourceArray 1,2,3 ----Dekh accumulator set to return value
 accumulator=5|current 3|index 2|sourceArray 1,2,3 */
 
 // arr.reduceRight() will start from right instead of Left(which is by default)
 let sum3 = numbers1.reduceRight((result, el, index, sourceArray) => {
   console.log(
     `accumulator=${result}|current ${el}|index ${index}|sourceArray ${sourceArray}`
   );
   return result + el;
 }, initAccBy2);
 /* accumulator=2|current 3|index 2|sourceArray 1,2,3
 accumulator=5|current 2|index 1|sourceArray 1,2,3
 accumulator=7|current 1|index 0|sourceArray 1,2,3 */
 
 console.log("sum3", sum3); //8