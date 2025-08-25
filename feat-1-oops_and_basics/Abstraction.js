// WHAT IS ABSTRACTION ?
// Abstraction is the process of hiding implementation details and exposing only the necessary functionality,
// The "What it does" is visible, while the "how it does" remains hidden.

// Concept Demonstration
class CoffeMachine {
    start() {
        console.log("Starting the machine...");
    }
    brewCoffee() {
        console.log("Brewing your coffee...");
    }
    stop() {
        console.log("Stoping the machine");
    }

    makeCoffee() { // Abstract method
        this.start();
        this.brewCoffee();
        this.stop();
    }
}

const machine = new CoffeMachine();
machine.makeCoffee();

// Real time example for Abstraction
// Design a PaymentProcessor class that allows user to make a payment. Internally, it should 
// handle authentication, payment verification and transaction complete. Only expose a single
// makePayment() method to the user

class PaymentProcessor {
    #authenticateUser(username, password) {
        if (!username || !password) {
            console.log("Both fields are required");
        } else {
            if (password !== "admin@123") {
                console.log("Password mismatch");
            } else {
                console.log(`Authenticating user ${username}...`);
            }
        }
    };

    #verifyPayment(amount) {
        if (!amount) {
            console.log("Enter a valid amount");
        } else {
            console.log(`Verifying payment of $${amount}...`);

        }
    }

    #transactionStatus(message) {
        if (message) {
            if (message === "paid") {
                console.log("Transaction completed successfully");
            } else if (message === "processing") {
                console.log("Transaction processing");
            } else if (message === "failed") {
                console.log("Transaction failed");
            }
        } else {
            console.log("Payment failed");
        }
    }

    makePayment(username, password, amount, message) {
        this.#authenticateUser(username, password);
        this.#verifyPayment(amount);
        this.#transactionStatus(message);
    }
}
const payment = new PaymentProcessor();
payment.makePayment("Narasimhan", "admin@123", 3000, "paid");