/* 
In this example, the Singleton class has a private static variable called instance, which holds the single instance of the class. The constructor of the class checks if instance is already assigned, and if not, initializes the singleton instance and assigns it to Singleton.instance. Subsequent calls to the constructor will return the existing instance.

The getData and setData methods are used to get and set the data of the singleton instance.

When creating instances of the Singleton class, the constructor will always return the same instance. The instance1 and instance2 variables both refer to the same object, as indicated by the console.log statement.

You can access and modify the data of the singleton instance through any of the instances, and the changes will be reflected across all references to the instance.

Please note that the above implementation of the Singleton pattern is not thread-safe. If your application runs in a multi-threaded environment, you may need to consider additional measures to ensure thread safety, such as using locks or synchronization mechanisms. 

*/
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // Initialize the singleton instance
      this.data = "Singleton instance initialized";
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

// Usage:
const instance1 = new Singleton();
console.log(instance1.getData()); // Output: Singleton instance initialized

const instance2 = new Singleton();
console.log(instance2.getData()); // Output: Singleton instance initialized

console.log(instance1 === instance2); // Output: true

instance1.setData("Updated data");
console.log(instance1.getData()); // Output: Updated data
console.log(instance2.getData()); // Output: Updated data