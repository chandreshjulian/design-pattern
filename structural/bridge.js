// Implementor interface
class Color {
  constructor() {
    if (new.target === Color) {
      throw new Error("Color is an abstract class and cannot be instantiated.");
    }
  }

  applyColor() {
    throw new Error("applyColor is not implemented.");
  }
}

// Concrete Implementors
class RedColor extends Color {
  applyColor() {
    return "Applying red color";
  }
}

class BlueColor extends Color {
  applyColor() {
    return "Applying blue color";
  }
}

// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  applyColor() {
    return this.color.applyColor();
  }

  draw() {
    throw new Error("draw is not implemented.");
  }
}

// Refined Abstractions
class Circle extends Shape {
  draw() {
    return `Drawing Circle: ${this.applyColor()}`;
  }
}

class Square extends Shape {
  draw() {
    return `Drawing Square: ${this.applyColor()}`;
  }
}

// Usage
const redCircle = new Circle(new RedColor());
const blueSquare = new Square(new BlueColor());

console.log(redCircle.draw()); // Output: Drawing Circle: Applying red color
console.log(blueSquare.draw()); // Output: Drawing Square: Applying blue color
