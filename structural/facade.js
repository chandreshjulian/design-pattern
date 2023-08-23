// Subsystem classes
class CPU {
  start() {
    console.log("CPU started");
  }

  shutdown() {
    console.log("CPU shutdown");
  }
}

class Memory {
  load() {
    console.log("Memory loaded");
  }

  unload() {
    console.log("Memory unloaded");
  }
}

class HardDrive {
  read() {
    console.log("HardDrive read");
  }

  write() {
    console.log("HardDrive write");
  }
}

// Facade class
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer started");
  }

  shutdown() {
    console.log("Computer shutting down");
    this.cpu.shutdown();
    this.memory.unload();
    this.hardDrive.write();
  }
}

// Client code
const computer = new ComputerFacade();
computer.start(); // Output: CPU started, Memory loaded, HardDrive read, Computer started
computer.shutdown(); // Output: Computer shutting down, CPU shutdown, Memory unloaded, HardDrive write
