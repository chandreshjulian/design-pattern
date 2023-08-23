// Factory implementation
class Product {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Product: ${this.name}`;
  }
}

class ProductFactory {
  createProduct(name) {
    return new Product(name);
  }
}

// Usage
const factory = new ProductFactory();

const product1 = factory.createProduct("Product A");
const product2 = factory.createProduct("Product B");

console.log(product1.getInfo()); // Output: Product: Product A
console.log(product2.getInfo()); // Output: Product: Product B