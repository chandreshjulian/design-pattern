// Command interface
class Command {
  execute() {
    throw new Error("execute method is not implemented.");
  }

  undo() {
    throw new Error("undo method is not implemented.");
  }
}

// Concrete Commands
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

// Receiver
class Light {
  constructor() {
    this.state = false;
  }

  turnOn() {
    console.log("Light is on");
    this.state = true;
  }

  turnOff() {
    console.log("Light is off");
    this.state = false;
  }
}

// Command Processor (Invoker)
class CommandProcessor {
  constructor() {
    this.commandHistory = [];
  }

  executeCommand(command) {
    command.execute();
    this.commandHistory.push(command);
  }

  undoLastCommand() {
    if (this.commandHistory.length > 0) {
      const lastCommand = this.commandHistory.pop();
      lastCommand.undo();
    }
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const commandProcessor = new CommandProcessor();

commandProcessor.executeCommand(lightOnCommand); // Output: Light is on
commandProcessor.executeCommand(lightOffCommand); // Output: Light is off

commandProcessor.undoLastCommand(); // Output: Light is on