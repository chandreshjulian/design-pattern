const Singleton = (function () {
  let instance;
  let count = 0;

  function createInstance() {
    // Your singleton instance creation logic here
    return {
      showMessage: function () {
        count++
        console.log("Hello from Singleton!" + count);
      }
      // You can add more methods and properties here
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true

instance1.showMessage(); // Output: Hello from Singleton!
instance2.showMessage(); // Output: Hello from Singleton!