// Component interface
class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    throw new Error("operation is not implemented.");
  }
}

// Leaf class
class Leaf extends Component {
  operation() {
    return `Leaf ${this.name} operation`;
  }
}

// Composite class
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation() {
    const childResults = this.children.map((child) => child.operation());
    return `Composite ${this.name} operation with [${childResults.join(", ")}]`;
  }
}

// Usage
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");

const composite = new Composite("Composite 1");
composite.add(leaf1);
composite.add(leaf2);

const leaf3 = new Leaf("Leaf 3");

const rootComposite = new Composite("Root Composite");
rootComposite.add(composite);
rootComposite.add(leaf3);

console.log(leaf1.operation()); // Output: Leaf Leaf 1 operation
console.log(composite.operation()); // Output: Composite Composite 1 operation with [Leaf Leaf 1 operation, Leaf Leaf 2 operation]
console.log(rootComposite.operation()); // Output: Composite Root Composite operation with [Composite Composite 1 operation with [Leaf Leaf 1 operation, Leaf Leaf 2 operation], Leaf Leaf 3 operation]
