// Receiver
class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

// Command interface
class Command {
  execute() {
    throw new Error("execute method is not implemented.");
  }
}

// Concrete Commands
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOnCommand);
remote.pressButton(); // Output: Light is on

remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: Light is off
