// What is Event Loop & Concurrency?

// Concurrency in JavaScript:
// - JavaScript is single-threaded (only one thing at a time), but it achieves 
// concurrency using the event loop and queues.
// - Long-running or async tasks (like API calls, setTimeout, Promises) are delegated
//  to Web APIs.
// - Once completed, callbacks are pushed into appropriate queues
//  (microtask queue or callback queue) and then the event loop moves them into the call stack when free.

// Event Loop:
// - It’s a mechanism that keeps checking if the call stack is empty and 
// moves tasks from queues into execution.

// Conecpt Demonstration
console.log("Process starts");

setTimeout(() => {
    console.log("Function from setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
})

console.log("Process End");

// Real time example for Eventloop
// - Imagine a Food Delivery App:
// - Main Thread: Taking new orders.
// - Web API (Timer): Simulating "Order cooking time".
// - Promise (Microtask): Instant status update like "Order confirmed".
// - Event Loop: Decides which update goes first (confirmed status before cooking status).

console.log("Customer placed an order");

Promise.resolve().then(() => {
    console.log("Order confirmed instantly");
})

setTimeout(() => {
    console.log("Order is ready");    
}, 3000);

console.log("Restraunts continues taking other orders");