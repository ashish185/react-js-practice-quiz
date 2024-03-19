/* 
Configurable:
I can modify the behavior of the property, so I can make them non-enumerable, non-writable or 
even non-configurable if I feel like doing so. Configurable properties are the only 
ones that can be removed using the delete operator. Defaults to true.
*/

//Configurable

const person = {
  name: "John",
  age: 30
};

Object.defineProperty( person, 'name', {
  value: "some value",
  configurable: true,
});
// Object {a: "some value"}
delete newObject.a;
// true
newObject
// Object {}

