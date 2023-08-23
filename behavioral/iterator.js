// Iterator interface
class Iterator {
  hasNext() {
    throw new Error("hasNext method is not implemented.");
  }

  next() {
    throw new Error("next method is not implemented.");
  }
}

// Concrete Iterator
class ArrayIterator extends Iterator {
  constructor(array) {
    super();
    this.array = array;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.array.length;
  }

  next() {
    if (this.hasNext()) {
      return this.array[this.index++];
    }
    return null;
  }
}

// Aggregate interface
class Aggregate {
  createIterator() {
    throw new Error("createIterator method is not implemented.");
  }
}

// Concrete Aggregate
class ArrayAggregate extends Aggregate {
  constructor() {
    super();
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator() {
    return new ArrayIterator(this.items);
  }
}

// Usage
const arrayAggregate = new ArrayAggregate();
arrayAggregate.addItem("Item 1");
arrayAggregate.addItem("Item 2");
arrayAggregate.addItem("Item 3");

const iterator = arrayAggregate.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
