let x= "any value";
/* It will show hover error, as per inference x should be string */

x=1; //Type 'number' is not assignable to type 'string'.

// What if I want only 5 is store?
let y:5;
y=5; //no error
y=10; //Error Type '10' is not assignable to type '5'

const z=5;