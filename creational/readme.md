# Creational Pattern

## Singleton
The Singleton pattern is implemented using an Immediately Invoked Function Expression (IIFE). The getInstance method ensures that only a single instance of the object is created and returned each time it's called. The instance variable is used to store the single instance of the object created.

Please note that this is a basic implementation. Depending on your specific use case and the environment you're working in, there might be variations and optimizations you can make to this pattern.

## Factory
The Factory pattern is implemented using classes. The Product class represents the objects that the factory creates, and the ProductFactory class is responsible for creating instances of the Product class. The createProduct method in the factory class is used to create instances of the product.

This pattern allows you to encapsulate the object creation logic in the factory, making it easier to manage and maintain your code, especially when you have multiple types of objects that need to be created in a consistent way.

## Builder
The Builder pattern is implemented using classes. The Product class represents the complex object that you want to build, and the ProductBuilder class provides methods to set different attributes of the product. The build method finalizes the construction and returns the built product.

This pattern is useful when creating objects with many optional or complex attributes. It allows you to separate the construction logic from the actual product class, making it easier to create different variations of the same type of object.

## Prototype
The Prototype pattern is implemented using the Product class. The clone method creates a new instance of the Product class with the same attributes as the original object. This allows you to create new objects by cloning an existing object, and then modifying the attributes of the cloned object as needed.

The Prototype pattern is particularly useful when you want to create new objects with similar attributes to an existing object without having to go through the process of creating a new object from scratch and setting all the attributes manually.