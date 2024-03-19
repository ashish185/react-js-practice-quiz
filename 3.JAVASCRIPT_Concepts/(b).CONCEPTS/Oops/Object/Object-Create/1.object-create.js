/* 
In JavaScript, Object.create() is a method that allows you to create a new object, using an existing object 
as the prototype of the newly created object.

Signature:
Object.create(proto, [propertiesObject]);
*/

//object has a config which contains four property as value, writable, enumerable and configurable.
var newObject = {a: 1};
// Accessing to a property
newObject.a; // => 1
// Modifying the value of a property
newObject.a = 0;
newObject.a; // => 0;
// Creating a new property
newObject.b = 2;
newObject.b; // => 2
// Deleting a property
delete newObject.b;
newObject.b; // => undefined
//