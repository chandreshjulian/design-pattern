// Builder implementation
class Product {
  constructor() {
    this.name = "";
    this.price = 0;
    this.color = "";
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }

  setColor(color) {
    this.color = color;
  }

  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}, Color: ${this.color}`;
  }
}

class ProductBuilder {
  constructor() {
    this.product = new Product();
  }

  setName(name) {
    this.product.setName(name);
    return this;
  }

  setPrice(price) {
    this.product.setPrice(price);
    return this;
  }

  setColor(color) {
    this.product.setColor(color);
    return this;
  }

  build() {
    return this.product;
  }
}

// Usage
const productBuilder1 = new ProductBuilder();
const product1 = productBuilder1
  .setName("Product A")
  .setPrice(100)
  .setColor("Red")
  .build();

const productBuilder2 = new ProductBuilder();
const product2 = productBuilder2
  .setName("Product B")
  .setPrice(200)
  .setColor("Blue")
  .build();

console.log(product1.getInfo()); // Output: Product: Product A, Price: 100, Color: Red
console.log(product2.getInfo()); // Output: Product: Product B, Price: 200, Color: Blue
