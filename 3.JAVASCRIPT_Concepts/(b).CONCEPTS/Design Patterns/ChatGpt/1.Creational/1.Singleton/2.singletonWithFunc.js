/* In this simplified example, the Singleton is implemented using an Immediately Invoked Function Expression 
(IIFE) to create a private scope. The instance variable is defined within this scope. */

const Singleton = (() => {
  let instance;

  function createInstance() {
    const object = new Object("Singleton instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Usage:
const instance1 = Singleton.getInstance();
console.log(instance1); // Output: Object { "Singleton instance" }

const instance2 = Singleton.getInstance();
console.log(instance2); // Output: Object { "Singleton instance" }

console.log(instance1 === instance2); // Output: true