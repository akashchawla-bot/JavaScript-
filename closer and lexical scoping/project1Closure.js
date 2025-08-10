// create a project for closure and lexical scoping with comments

// how it works
    // The makeCounter function creates a closure that encapsulates the count variable
    // The returned object provides methods to interact with the private count variable
    // Each method forms a closure, allowing it to access the count variable even after makeCounter has finished executing

function makeCounter() {
    let count = 0; // private variable
    return { // public API
        increment: function() { // closure
            count++; // increment the private variable
            return count;
        },
        decrement: function() { // closure
            count--; // decrement the private variable
            return count;
        },
        getCount: function() { // closure
            return count; 
        }
    };
}

const counter = makeCounter(); // create a new counter instance
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.getCount());  // 3
console.log(counter.decrement()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1