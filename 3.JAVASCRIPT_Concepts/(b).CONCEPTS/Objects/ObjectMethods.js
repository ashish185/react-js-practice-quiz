Object.apply()
Object.assign();
Object.create(); //It allows you to create an object that inherits properties from another object without using constructor functions or classes.
Object.call();
Object.bind();
Object.defineProperties();
Object.defineProperty();
Object.freeze();
Object.seal();
Object.is();
Object.isFrozen();
Object.isSealed();
Object.getOwnPropertyDescriptor();
Object.getOwnPropertyNames();
Object.getOwnPropertySymbols();
Object.setPrototypeOf();
Object.toString();

const personProto = {
  greet() {
      console.log(`Hello, my name is ${this.name}.`);
  }
};

const john = Object.create(personProto);
john.name = 'John Doe';
john.greet(); // Output: Hello, my name is John Doe.
