// Existing class (Adaptee)
class LegacySystem {
  legacyOperation() {
    return "Legacy operation result";
  }
}

// Adapter
class LegacySystemAdapter {
  constructor(legacySystem) {
    this.legacySystem = legacySystem;
  }

  newOperation() {
    const result = this.legacySystem.legacyOperation();
    // Additional processing or transformation can be done here
    return `Adapted: ${result}`;
  }
}

// Client code
const legacySystem = new LegacySystem();
const legacyAdapter = new LegacySystemAdapter(legacySystem);

console.log(legacyAdapter.newOperation()); // Output: Adapted: Legacy operation result
