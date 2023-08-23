// Abstract class with template method
class AbstractClass {
  templateMethod() {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }

  stepOne() {
    throw new Error("stepOne method is not implemented.");
  }

  stepTwo() {
    throw new Error("stepTwo method is not implemented.");
  }

  stepThree() {
    throw new Error("stepThree method is not implemented.");
  }
}

// Concrete class implementing the template methods
class ConcreteClass extends AbstractClass {
  stepOne() {
    console.log("ConcreteClass: Step One");
  }

  stepTwo() {
    console.log("ConcreteClass: Step Two");
  }

  stepThree() {
    console.log("ConcreteClass: Step Three");
  }
}

// Usage
const concreteObject = new ConcreteClass();
concreteObject.templateMethod();
