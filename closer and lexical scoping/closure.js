// /* closer example */
// In JavaScript, closures are functions that have access to variables from their outer (enclosing) function scope, even after the outer function has finished executing.
// This allows for data encapsulation and private variables, which is a powerful feature in JavaScript.


// closure in action
// In this example, we define an outer function that returns an inner function.
// The inner function can access the variable 'secret' defined in the outer function's scope.
// When we call the outer function, it returns the inner function, which retains access to 'secret' even after the outer function has executed.
// This is a classic example of a closure in JavaScript.
function outer() {
  let secret = "I am a closure";

  function inner() {
    console.log(secret); // ✅ Can access 'secret'
  }

  return inner;
}

const myFunc = outer(); // outer() runs and returns inner()
myFunc(); // Logs: "I am a closure"


// closure + static scoping
// In this example, we create a counter function that maintains its own state.
// The inner function increments a local variable 'count' each time it is called function createCounter() {
// This is a closure because the inner function retains access to the 'count' variable even after the outer function has executed.

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3 so on...



// quick challenge
// What will this print?
// In this example, we define a function 'mystery' that returns another function.
// The returned function accesses a variable 'value' defined in the outer function's scope.
// When we call 'mystery', it returns a function that retains access to 'value'
// even after 'mystery' has finished executing.
// This is a closure, and it allows the inner function to access 'value' even though

function mystery() {
  let value = 42;

  return function () {
    return value;
  };
}

const hidden = mystery();
console.log(hidden()); // What will this print?

// Answer: 42