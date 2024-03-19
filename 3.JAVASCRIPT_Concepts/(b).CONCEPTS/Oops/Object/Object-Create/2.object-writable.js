/* 
Har object k pass 4 property associated hoti h,
value, writable, enumerable, configurable: They all are true by default

Default below is true
Object.defineProperty( newObject, 'a', {
  value: "some value",
  writable: true,
  enumerable: true,
  configurable: true
});
*/

/* 
Writable: default true, if false it cannot writable
Note: It does not mean it will give error on assigning a new value.
*/

// One common use case for making an object non-writable is when you want to create a constant or read-only object
const person = {
  name: "John",
  age: 30
};

Object.defineProperty(person, 'name', {
  writable: false
});

person.name = "Jane"; // This assignment will be ignored in strict mode or throw an error in non-strict mode

console.log(person.name); // Output: John