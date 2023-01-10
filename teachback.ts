// ---------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------
// ENCAPSULATION: group related functions and variables together -- Reduce complexity + increase reusability
//                implementation and state of each object are privately held inside a defined boundary, or class.
class House {
  public rooms: number;
  public bathrooms: number;
  private isAvailable: boolean;

  constructor(rooms: number, bathrooms: number, private isAvaibale: boolean) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.isAvaibale = isAvaibale;
  }
  houseSpecs() {
    return this.rooms, this.bathrooms;
  }
  public describeHouseSpecs() {
    return `This house has ${this.rooms} rooms and ${this.bathrooms} bathrooms and is ${this.isAvailable}`;
  }
}

class Car {
  public make: string;
  public model: string;
  public color: string;
  constructor(make: string, model: string, color: string) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  carSpecs() {
    return this.make, this.model, this.color;
  }
  describeCarSpecs() {
    return `This car is a ${this.make} ${this.model} in the color ${this.color}`;
  }
}

const house1 = new House(4, 2, true);
const car1 = new Car("Toyota", "Highlander", "white");

// console.log(house1.rooms);
// console.log(car1.rooms);
// console.log(car1.describeHouseSpecs());

// ABSTRACTION: hide details and complexity, show only the essentials -- Reduce complexity + isolate impact of changes
//              all our attributes are private and cannot be accessed outside the class object.
// console.log(house1.rooms, house1.bathrooms);
// console.log(house1.isAvailable);
// console.log(house1.describeHouseSpecs());

// ---------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------
// INHERITANCE: Eliminate redundant code
//              Extend existing classes to create new ones
//              Classes inherit properties and methods from base classes.

class Person {
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class unEmployed extends Person {
  constructor(firstName: string, lastName: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}

let person1 = new unEmployed("John", "Doe");
// console.log(person1.getFullName());
// console.log(person1.describe());

// POLYMOSPHISM: Allows you to specify discrete logic that is customized for each specific child class.
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + " " + `I'm a ${this.jobTitle}.`;
  }
}

let person2 = new Employee("Jane", "Doe", "Web Developer");
// console.log(person2.getFullName());
// console.log(person2.describe());
