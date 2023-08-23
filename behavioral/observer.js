// Observer interface
class Observer {
  update(data) {
    throw new Error("update method is not implemented.");
  }
}

// Concrete Observers
class ConcreteObserverA extends Observer {
  update(data) {
    console.log(`Observer A received data: ${data}`);
  }
}

class ConcreteObserverB extends Observer {
  update(data) {
    console.log(`Observer B received data: ${data}`);
  }
}

// Subject (Observable)
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

// Usage
const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notify("Some data has been updated.");
// Output: Observer A received data: Some data has been updated.
//         Observer B received data: Some data has been updated.

subject.removeObserver(observerA);

subject.notify("Another update.");
// Output: Observer B received data: Another update.
