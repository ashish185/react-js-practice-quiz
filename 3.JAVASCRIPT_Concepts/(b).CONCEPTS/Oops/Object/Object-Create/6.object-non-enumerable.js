/* 
Enumerable:
I can access to all of them using a for..in loop. Also, enumerable property keys of an object are 
returned using Object.keys method. Defaults to true
*/
const person = {
  name: 'Harish',
  age: 40
}

Object.defineProperty(person, 'name', {
  value: "some value",
  enumerable: false, //Name key will non enumerable.
});
for (var key in person) { console.log(key) }
// age

console.log('Object.keys(person)', Object.keys(person));
// ['age']