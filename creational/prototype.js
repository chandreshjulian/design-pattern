// Prototype implementation
class Product {
  constructor(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
  }

  clone() {
    return new Product(this.name, this.price, this.color);
  }

  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}, Color: ${this.color}`;
  }
}

// Usage
const originalProduct = new Product("Original Product", 100, "Red");
const clonedProduct = originalProduct.clone();

console.log(originalProduct.getInfo()); // Output: Product: Original Product, Price: 100, Color: Red
console.log(clonedProduct.getInfo());   // Output: Product: Original Product, Price: 100, Color: Red

// Modifying the cloned product
clonedProduct.name = "Cloned Product";
clonedProduct.price = 150;
clonedProduct.color = "Blue";

console.log(originalProduct.getInfo()); // Output: Product: Original Product, Price: 100, Color: Red
console.log(clonedProduct.getInfo());   // Output: Product: Cloned Product, Price: 150, Color: Blue
