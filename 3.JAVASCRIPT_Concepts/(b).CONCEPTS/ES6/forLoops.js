//You can;t use break in forEach loop, use every instead everty m true false reurn krna pdta h
console.log("**********For In vs For of ****************************");
/* for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values o */

const arr=[12,13,14,15];
//like in will give index
for(const val in arr){/* returns a list of keys */
  console.log("with for in-", val); 
}
/* 
with for in- 0
with for in- 1
with for in- 2
with for in- 3
 */
for(const val of arr){ /*  for..of returns a list of values */
  console.log("with for of-", val);
}
/* 
with for of- 12
with for of- 13
with for of- 14
with for of- 15
*/
