/* 
Enumerable:
I can access to all of them using a for..in loop. Also, enumerable property keys of an object are 
returned using Object.keys method. Defaults to true
*/
const person={
  name: 'Harish'
}

Object.defineProperty( person, 'name', {
  value: "some value",
  enumerable: true,
});
// Object {name: "some value"}
for (var key in person) { console.log(key) } 
// name

console.log('Object.keys(person)', Object.keys(person));
// ["a"]