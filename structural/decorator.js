// Component interface
class Coffee {
  cost() {
    return 5;
  }

  getDescription() {
    return "Coffee";
  }
}

// Concrete Component
class Espresso extends Coffee {
  cost() {
    return 10;
  }

  getDescription() {
    return "Espresso";
  }
}

// Decorator class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// Usage
const espresso = new Espresso();
console.log(espresso.getDescription(), "costs", espresso.cost());

const milkCoffee = new MilkDecorator(espresso);
console.log(milkCoffee.getDescription(), "costs", milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.getDescription(), "costs", sugarMilkCoffee.cost());
