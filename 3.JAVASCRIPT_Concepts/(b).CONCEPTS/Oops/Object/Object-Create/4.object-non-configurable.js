/* 
configurable: false
Property delete operator se delete krne k bad bhi object m rehti h
*/

const person = {
  name: "John",
};
//Non-configurable
Object.defineProperty( person, 'name', {
  value: "some value",
  configurable: false,
});
// Object {name: "some value"}
delete person.name;
// false
console.log(person); 
// Object {name: "some value"}
