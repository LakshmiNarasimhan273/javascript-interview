// WHAT IS PROTOTYPE ?
// In javascript, every object has a hidden property called [[prototype]] (or __proto__) which
// points to another object.
// In short:
// Prototype allows objects to share methods.
// Prevents duplicate copies of methods for each objects.

// Concept Demonstration
function Person(name){
    this.name = name;
}

Person.prototype.greetMessage = function(){
    return `Hello ${this.name}, welcome back`;
}

const adminUser = new Person("Admin");
const user = new Person("Narasimhan");

console.log(adminUser.greetMessage())
console.log(user.greetMessage())

// Real time example for Prototype
// Design a Product constructor where all products share a common getDiscountedPrice()
// method using prototype.
// Demonstrate how adding methods via prototype avoids duplication and saves memory.

function Product(title, price, category){
    this.title = title;
    this.price = price;
    this.category = category;
}

Product.prototype.getDiscountedPrice = function(discount){
    const finalPrice = this.price - (this.price * discount / 100);
    return `${this.title} (${this.category}) - Final price: $${finalPrice}`;
};

Product.prototype.addProduct = function(){
    return `Product: ${this.title}, Price: ${this.price}, Category: ${this.category}`;
};

const laptop = new Product("HP Laptop", 60000, "Electronics");
const writingPad = new Product("Apple Writing Pad", 39000, "Computer Pheripharals");

console.log(laptop.addProduct());
console.log(writingPad.addProduct());

console.log(laptop.getDiscountedPrice(20));
console.log(writingPad.getDiscountedPrice(8));