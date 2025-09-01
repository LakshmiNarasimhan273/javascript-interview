// WHAT IS POLYMORPHISM ?
// Polymorphism means "Many Forms", It allows the same method name to behave differently 
// depending on the object/class that is calling it.
// In short: One interface, multiple implementation

// Concept Demonstration
class Animal{
    makeSound(){
        console.log("Animal Sounds");        
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("🐕-Dog barking");
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("🐈‍-Cat Meowwww");
        
    }
}
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => animal.makeSound());

// Real time example for Polymorphism
// Design a payment system where multiple payment methods(Creditcards, UPI, PayPal)
// can be used to pay. Each method should have its own implementation of processPayment().
// The checkout system should handle them polymorphically.

class Payment{
    constructor(amount){
        this.amount = amount;
    }
    processPayment(){
        return `Processing generic payment of $${this.amount}`;
    }
}

class CreditCardPayment extends Payment{
    processPayment(){
        return `Paid $${this.amount} using credit card`;
    }
}

class UPIPayment extends Payment{
    processPayment(){
        return `Paid $${this.amount} using UPI`;
    }
}

class PayPalPayment extends Payment{
    processPayment(){
        return `Paid $${this.amount} using PayPal`;
    }
}

function checkout(paymentmethod){
    console.log(paymentmethod.processPayment());
}

const payments = [
    new CreditCardPayment(30000),
    new UPIPayment(20000),
    new PayPalPayment(50000)
]

payments.forEach(pay => checkout(pay));