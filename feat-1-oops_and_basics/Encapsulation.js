// WHAT IS ENCAPSULATION ?
// Encapsulation is the process of hiding internal data and providing controlled access through
// public methods.
// It ensures data integrity, prevents unauthorized modifications, and makes code modular & maintainable.

// Concept Demonstration
function user(username, password){
    let _password = password; // naming convention 
    // _ underscore is a naming convention not a actual privacy(private variable)

    return {
        getName: () => username,
        checkPassword: (enteredPassword) =>
            enteredPassword === _password
    };
};

const user1 = user("Narasimhan", "narasimhan@123");

console.log("Username:",user1.getName());  // it will return the username which we passed for user function
console.log("Accessing private variable directly",user1._password); // undefined (cannot access the private variable)
console.log("Checking the private variable value through function",user1.checkPassword("narasimhan@123")); 
// this checkPassword function take the argument values and check the assigned password is matched
// to the entered password.

// Real time example for Encapsulation
// Designing a BankAccount class in JavaScript where the balance is private. Only allow 
// deposits, withdrawls and balance inquiry through methods. Ensure direct assess to
// balance is not possible.

class BankAccount{
    #account_balance;

    constructor(accountHoldername, initialBalance){
        this.accountHoldername = accountHoldername;
        this.#account_balance = initialBalance;
    }

    deposit(amount){
        if(amount <= 0){
            return "Deposit amount must be greater than zero";
        }
        this.#account_balance += amount;
        return `${amount} Credited to your bank account . Available balance ${this.#account_balance}`;
    }

    whithdrawl(amount){
        if(amount > this.#account_balance){
            return "Insufficient account balance";
        }
        this.#account_balance -= amount;
        return `Collect your amount ${amount}. Current Balance ${this.#account_balance}`;
    }

    getBalance(){
        return `Account Balance: ${this.#account_balance}`;
    }
}

const userAccount = new BankAccount("Narasimhan", 5000);
console.log(userAccount.getBalance());
console.log(userAccount.deposit(4000));
console.log(userAccount.whithdrawl(3000));