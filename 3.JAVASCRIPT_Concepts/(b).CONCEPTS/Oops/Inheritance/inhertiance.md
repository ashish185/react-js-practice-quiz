/* 
In multiple inheritance, an object can inherit the properties and values from unrelated parent objects. Some object-oriented languages allow multiple inheritance. JavaScript does not support multiple inheritance.

Inheritance of property values occurs at run time by JavaScript searching the prototype chain of an object to find a value. Since every object has a single associated prototype, it cannot dynamically inherit from more than one prototype chain.

*/

## Proto chaining
<!-- Every oject you created as __proto__ -->
```js
const arr = [];
console.log(arr.__proto__);

console.log(Array.prototype);
console.log(Array.prototype.__proto__);
```