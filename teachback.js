var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ---------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------
// ENCAPSULATION: group related functions and variables together -- Reduce complexity + increase reusability
//                implementation and state of each object are privately held inside a defined boundary, or class.
var House = /** @class */ (function () {
    function House(rooms, bathrooms, isAvailable) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.isAvailable = isAvailable;
    }
    House.prototype.houseSpecs = function () {
        return this.rooms, this.bathrooms;
    };
    House.prototype.describeHouseSpecs = function () {
        return "This house has ".concat(this.rooms, " rooms and ").concat(this.bathrooms, " bathrooms and is ").concat(this.isAvailable);
    };
    return House;
}());
var Car = /** @class */ (function () {
    function Car(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    Car.prototype.carSpecs = function () {
        return this.make, this.model, this.color;
    };
    Car.prototype.describeCarSpecs = function () {
        return "This car is a ".concat(this.make, " ").concat(this.model, " in the color ").concat(this.color);
    };
    return Car;
}());
var house1 = new House(4, 2, true);
var car1 = new Car("Toyota", "Highlander", "white");
// console.log(house1.rooms);
// console.log(car1.rooms);
// console.log(car1.describeHouseSpecs());
// ABSTRACTION: hide details and complexity, show only the essentials -- Reduce complexity + isolate impact of changes
//              all our attributes that are private cannot be accessed outside the class object.
// console.log(house1.rooms, house1.bathrooms);
// console.log(house1.isAvailable);
// console.log(house1.describeHouseSpecs());
// ---------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------
// INHERITANCE: Eliminate redundant code
//              Extend existing classes to create new ones
//              Classes inherit properties and methods from base classes.
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var unEmployed = /** @class */ (function (_super) {
    __extends(unEmployed, _super);
    function unEmployed(firstName, lastName) {
        // call the constructor of the Person class:
        return _super.call(this, firstName, lastName) || this;
    }
    return unEmployed;
}(Person));
var person1 = new unEmployed("John", "Doe");
// console.log(person1.getFullName());
// console.log(person1.describe());
// POLYMOSPHISM: Allows you to specify discrete logic that is customized for each specific child class.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + " " + "I'm a ".concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
var person2 = new Employee("Jane", "Doe", "Web Developer");
console.log(person2.getFullName());
console.log(person2.describe());
