// Strategy interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("pay method is not implemented.");
  }
}

// Concrete Strategies
class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber, cardHolder) {
    super();
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
  }

  pay(amount) {
    console.log(`Paid $${amount} using credit card ${this.cardNumber}`);
  }
}

class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid $${amount} using PayPal with email ${this.email}`);
  }
}

// Context
class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    const amount = this.getTotal();
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const creditCardPayment = new CreditCardPayment("1234-5678-9012-3456", "John Doe");
const paypalPayment = new PayPalPayment("john@example.com");

const cart1 = new ShoppingCart(creditCardPayment);
cart1.addItem({ name: "Item 1", price: 50 });
cart1.addItem({ name: "Item 2", price: 30 });
cart1.checkout(); // Output: Paid $80 using credit card 1234-5678-9012-3456

const cart2 = new ShoppingCart(paypalPayment);
cart2.addItem({ name: "Item 3", price: 20 });
cart2.checkout(); // Output: Paid $20 using PayPal with email john@example.com