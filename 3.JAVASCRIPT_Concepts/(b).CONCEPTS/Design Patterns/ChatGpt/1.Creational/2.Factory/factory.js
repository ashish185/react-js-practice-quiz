/* 
The Factory design pattern allows for centralized creation of objects and provides a convenient way to 
encapsulate the object creation logic. It promotes loose coupling by separating the object instantiation
from the client code, making it easier to manage and extend the creation process.
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

class ProductFactory {
  createProduct(name, price) {
    return new Product(name, price);
  }
}

// Usage:
const factory = new ProductFactory();

const product1 = factory.createProduct("Widget", 10.99);
console.log(product1.getInfo()); // Output: Product: Widget, Price: $10.99

const product2 = factory.createProduct("Gadget", 19.99);
console.log(product2.getInfo()); // Output: Product: Gadget, Price: $19.99
