
console.log("----------------Find method-----------------------");
/* 
The find() method returns the value of the first element
 in the provided array that satisfies the provided testing function.
 If no values satisfies the testing function, undefined is returned.
*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12