/* 
The Prototype pattern allows you to create new objects based on existing ones, avoiding the need for 
repetitive object creation and initialization. It is particularly useful when creating multiple objects with 
similar initial states or configurations.
*/

/* 
The Prototype design pattern in JavaScript allows you to create new objects by cloning existing objects, known as prototypes. It avoids the need for explicitly creating new instances of objects by using a prototype as a blueprint for creating copies.

JavaScript has built-in support for prototypal inheritance through the use of prototypes. The Prototype pattern takes advantage of this feature to create new objects based on existing ones.

Here's an example implementation of the Prototype design pattern in JavaScript:
*/

// Prototype object
const prototype = {
  name: "Default",
  greeting: function() {
    return `Hello, my name is ${this.name}`;
  },
  clone: function() {
    const clonedObject = Object.create(this);
    return clonedObject;
  }
};

// Create an object using the prototype
const obj1 = prototype.clone();
console.log(obj1.greeting()); // Output: Hello, my name is Default

// Modify the name property of the cloned object
obj1.name = "John";
console.log(obj1.greeting()); // Output: Hello, my name is John

// Create another object using the prototype
const obj2 = prototype.clone();
console.log(obj2.greeting()); // Output: Hello, my name is Default

/* 
In this example, we have a prototype object that serves as the template for creating new objects. It contains properties and methods that will be shared among the cloned objects.

The prototype object has a name property and a greeting method, which returns a greeting message including the name.

The clone method is used to create a new object based on the prototype. It uses Object.create to create a new object with the prototype as its prototype (parent object).

To create new objects, we call the clone method on the prototype object. This creates a new object that inherits the properties and methods from the prototype. We can modify the properties of each cloned object independently.

In the example, we create two objects, obj1 and obj2, using the prototype. Both objects initially have the default name "Default". We modify the name property of obj1 to "John", while obj2 retains the default name. When we call the greeting method on each object, we get the appropriate greeting message with the respective names.

*/