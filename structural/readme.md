# Structure Pattern

## Adapter
The Adapter pattern is implemented using the LegacySystemAdapter class. The LegacySystemAdapter wraps the existing LegacySystem class (the Adaptee) and provides a new method newOperation that adapts the behavior of the legacy system to fit the expected interface.

The Adapter pattern is used to make incompatible interfaces work together. In this case, the LegacySystemAdapter allows the client code to use the new operation without directly modifying the legacy system's code.

## Bridge
The Bridge pattern is implemented using the Color interface as the Implementor and the Shape class as the Abstraction. The concrete implementors (RedColor and BlueColor) provide specific implementations of the applyColor method, and the refined abstractions (Circle and Square) inherit from the Shape class and utilize the color implementation through the applyColor method.

The Bridge pattern is useful when you want to decouple an abstraction from its implementation, allowing both to evolve independently. It's particularly helpful in scenarios where you have multiple variations of abstractions and implementations that need to be combined in a flexible way.

## Composite
The Composite pattern is implemented using the Component interface as the base class, and the Leaf and Composite classes as the leaf and composite components, respectively.

The Leaf class represents individual elements that have no children, and the Composite class represents containers that can hold other components. Both Leaf and Composite classes implement the operation method, allowing them to be treated uniformly.

The Composite pattern is useful when you need to represent part-whole hierarchies of objects. It allows you to treat individual objects and compositions of objects uniformly, making it easier to work with complex structures.

## Decorator
The Decorator pattern is implemented using the Coffee class as the component interface, and concrete components like Espresso. The CoffeeDecorator class acts as a base decorator, and concrete decorators like MilkDecorator and SugarDecorator add functionalities to the coffee objects.

Decorators extend the behavior of the core component while preserving the original component's interface. This allows you to stack multiple decorators and create various combinations of functionalities dynamically, without altering the original object's structure.

The Decorator pattern is useful when you want to add or modify behavior of individual objects at runtime without modifying the class itself.

## Facade
The Facade pattern is implemented using the ComputerFacade class. The ComputerFacade class provides a simplified interface for the complex subsystems (CPU, Memory, and HardDrive). Clients can interact with the computer system using the facade's methods without needing to understand the internal details of each subsystem.

The Facade pattern is useful for providing a simple and unified interface to a set of interfaces in a complex subsystem. It helps reduce the complexity and improve the usability of code, especially when dealing with intricate systems.