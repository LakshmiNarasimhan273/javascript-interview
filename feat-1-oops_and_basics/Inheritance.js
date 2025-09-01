// WHAT IS INHERITANCE ?
// Inheritance is the process of one class (child) can acquire the properties and methods of another
// class (parent).
// It promotes code reusability and establishes a natural IS-A relatiohship

// Concept Demonstration
class Animal {
    eat(){
        console.log("Animal eating");        
    }
}

class Dog extends Animal {
    bark(){
        console.log("Barking");        
    }
}

const dog = new Dog();
dog.eat();
dog.bark();

// Real time example for Inheritance
// Designing an Employee management system where Manager and Developer inherit from a base
// Employee class.
// Each role should have its own responsibilites while sharing common properties.

class Employee{
    constructor(username, role){
        this.username = username;
        this.role = role;
    }
    getDetails(){
        return `Employee Class: Welcome ${this.username}, you're promoted to ${this.role}`;
    }
}

class Manager extends Employee{
    orientation(){
        return `Manager Class: ${this.username} new developers are hired, please orient them`
    }
}

class Developer extends Manager{
    task(){
        return `Developer Class: ${this.username} - ${this.role} New task assigned for you`
    }
}

const emp1 = new Manager("Narasimhan", "Manager");
console.log(emp1.getDetails());
console.log(emp1.orientation());

const emp2 = new Developer("John", "Backend Developer");
console.log(emp2.task());