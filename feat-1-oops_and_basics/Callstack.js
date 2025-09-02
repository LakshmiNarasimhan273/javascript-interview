// WHAT IS EXECUTION CONTEXT IN JAVASCRIPT ?
// The Execution Context (EC) is the environment where javascript code runs.
// Types of EC:- Global Execution Context (GEC) | Function Execution Context (FEC)
// It defines:
// Variable Environment (variables, functions)
// Scope Chain (lexical scope for variable access)
// this Binding (value of this in that context)

// WHAT IS CALLSTACK ?
// The Callstack is a data structure Last-In-First-Out (LIFO) that keeps track of function execution.
// When a function is called, a new Execution Context is pushed to the stack.
// When the function finishes, it EC is popped off the stack.

// Concept Demonstration

function first(){
    console.log("First function executed");
    second();    
}

function second(){
    console.log("Second function executed");
    third();
}

function third(){
    console.log("Third function executed");
}
first();

// Real time example for CallStack 
// Simulate an order processing system where multiple functions(selectItems(), makePayment())
// execute in sequence. Show how execution contexts gets created and managed in the Call Stack.

console.log("🛒 Order processing started...")

function selectItem(item){
    console.log(`Product Selected: ${item}`);

    setTimeout(() => {
        console.log(`💳 Payment processed for: ${item}`);
    }, 3000);
    makePayment(item);
}

function makePayment(item){
    console.log(`Processing payment for: ${item}`);

    Promise.resolve().then(() => {
        console.log(`📃 Invoice generated for: ${item}`);
    })
}

selectItem("Laptop");

console.log("✅ Order placed successfully");