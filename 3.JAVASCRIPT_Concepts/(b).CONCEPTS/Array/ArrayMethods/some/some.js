console.log("----------------Some---------------------");
/* The some() method tests whether at least one element in the array passes 
the test implemented by the provided function.
 It returns a Boolean value */
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
